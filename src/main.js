import Vue from 'vue';
import VueSession from 'vue-session';
import VueApexCharts from 'vue-apexcharts';
import './assets/css/index.css';

import Bugsnag from '@bugsnag/js';
import BugsnagPluginVue from '@bugsnag/plugin-vue';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import axios from './utils/axios';
import store from './store/index';
import App from './App.vue';
import router from './router';
import { clearSession, logoutUser, setSession } from './utils/auth';

const options = {
	persist: true
};

window.moment = moment;
// install rules and localization
Object.keys(rules).forEach((rule) => {
	extend(rule, rules[rule]);
});

localize('en', en);
const env = ['staging', 'production'];
if (env.includes(process.env.VUE_APP_NODE_ENV)) {
	Bugsnag.start({
		apiKey: process.env.VUE_APP_BUGSNAG_KEY,
		plugins: [new BugsnagPluginVue()],
		appType: 'klump-merchant-dashboard',
		enabledReleaseStages: ['production', 'staging'],
		releaseStage: process.env.VUE_APP_NODE_ENV,
		redactedKeys: [
			'token', // exact match: "access_token"
			/^password$/i, // case-insensitive: "password", "PASSWORD", "PaSsWoRd"
			/^cc_/ // prefix match: "cc_number" "cc_cvv" "cc_expiry"
		]
	});

	Bugsnag.getPlugin('vue').installVueErrorHandler(Vue);
}

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(VueSession, options);
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);
Vue.config.productionTip = false;

Vue.filter('formatCurrency', (val, currency = 'NGN') => {
	let country;
	if (currency === 'NGN') {
		country = 'NG';
	} else if (currency === 'GHS') {
		country = 'GH';
	} else if (currency === 'USD') {
		country = 'US';
	}
	const formatter = new Intl.NumberFormat(`en-${country}`, {
		style: 'currency',
		currency,
		minimumFractionDigits: 2
	});

	return formatter.format(val);
});

new Vue({
	router,
	store,
	data() {
		return {
			userId: null
		};
	},
	computed: {
		isLoggedIn() {
			return store.getters.isLoggedIn;
		},
		loggedUser() {
			return store.getters.getLoggedUser;
		},
		isRefreshingToken() {
			return store.getters.refreshingToken;
		}
	},
	watch: {
		isLoggedIn(val) {
			if (val) {
				this.handleSession(this.loggedUser);
				this.userId = this.loggedUser.id;
			}
		},
		isRefreshingToken(status) {
			if (status) {
				this.handleSession(this.loggedUser);
			}
		}
	},
	created() {
		if (this.isLoggedIn) {
			try {
				const token = jwtDecode(this.loggedUser.token);
				const time = Date.now().valueOf() / 1000;
				if (token.exp < time) {
					this.$session.clear();
					logoutUser();
				} else this.resumeSession();
			} catch (error) {
				this.endSession();
				return error;
			}
			return true;
		}
		return true;
	},
	methods: {
		/**
		 * Starts a session with logged user data
		 * @param {Object} data
		 */
		handleSession(data) {
			this.$session.start();
			this.$session.set('user', data);
			this.$session.set('token', this.loggedUser.token);
			setSession(data);
			axios.defaults.headers.common.Authorization = `Bearer ${this.loggedUser.token}`;

			store.commit('setLoggedUser', data);
		},
		/**
		 * Resumes a session
		 */
		resumeSession() {
			const token = this.$session.get('token');
			const user = this.$session.get('user');
			axios.defaults.headers.common.Authorization = `Bearer ${token}`;
			store.commit('setLoggedUser', user);
		},
		/**
		 * Ends session and clears session data
		 */
		endSession() {
			this.$session.clear();
			this.$session.destroy();
			clearSession();
			delete axios.defaults.headers.common.Authorization;
			store.commit('logout');
			setTimeout(() => {
				this.$router.push({ name: 'SignIn' });
			}, 500);
		}
	},
	render: (h) => h(App)
}).$mount('#app');
