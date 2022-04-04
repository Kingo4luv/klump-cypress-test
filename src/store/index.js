import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import auth from './modules/auth';
import countries from './modules/countries';
import industries from './modules/industries';
import merchant from './modules/merchants';
import transactions from './modules/transactions';
import chargeBacks from './modules/chargeBacks';
import searches from './modules/searches';

const vuexPersistence = new VuexPersistence({
	storage: localStorage
});

Vue.use(Vuex);

const initialState = {
	auth: auth.state,
	countries: countries.state,
	industries: industries.state,
	merchant: merchant.state,
	transactions: transactions.state,
	chargeBacks: chargeBacks.state,
	searches: searches.state
};
const initialAlertState = {
	type: '',
	message: ''
};

const store = new Vuex.Store({
	state: {
		status: '',
		errorLog: {},
		isSidebarOpen: false,
		alert: initialAlertState,
		dashboardData: [],
		pageRange: {
			lowerBound: 0,
			upperBound: 10
		}
	},
	getters: {
		getStatus: (state) => state.status,
		getErrorLog: (state) => state.errorLog,
		getAlert: (state) => state.alert,
		getDashboardData: (state) => state.dashboardData,
		getPageRange: (state) => state.pageRange
	},
	mutations: {
		reqInit: (state) => {
			state.status = 'loading';
			state.errorLog = {};
		},
		reqSuccess: (state) => {
			state.status = 'success';
		},
		reqError: (state) => {
			state.status = 'error';
		},
		logError: (state, data) => {
			state.errorLog = data;
		},
		resetReq: (state) => {
			state.status = '';
			state.errorLog = {};
		},
		resetAll: (state) => {
			Object.keys(state).forEach((key) => {
				Object.assign(state[key], initialState[key]);
			});
		},
		resetSidebar: (state) => {
			state.isSidebarOpen = false;
		},
		clearAlert: (state) => {
			state.alert = initialAlertState;
		},
		setAlert: (state, data) => {
			state.alert = data;
		},
		setData: (state, data) => {
			state.dashboardData = data;
		},
		setPageRange: (state, data) => {
			state.pageRange.lowerBound += data.lower;
			state.pageRange.upperBound += data.upper;
		},
		resetPageRange: (state) => {
			state.pageRange.lowerBound = 0;
			state.pageRange.upperBound = 10;
		},
		setDefaultPageRange: (state) => {
			state.pageRange.lowerBound = 2;
			state.pageRange.upperBound = 11;
		}
	},
	modules: {
		auth,
		countries,
		industries,
		merchant,
		transactions,
		chargeBacks,
		searches
	},
	plugins: [vuexPersistence.plugin]
});

export default store;
