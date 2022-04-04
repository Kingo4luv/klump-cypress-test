<template>
	<div>
		<Header />
		<NavBar />
		<Alert v-if="getAlert.message != ''" />
		<SettingDetails />
		<Footer />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SettingDetails from '../components/Settings/SettingDetails';
import Alert from '@/components/Alerts/Alert';

export default {
	name: 'Settings',
	components: {
		Header,
		NavBar,
		Footer,
		SettingDetails,
		Alert
	},
	computed: {
		...mapGetters(['getMerchantPayouts', 'getStatus', 'getAlert', 'getLoggedUser'])
	},
	created() {
		this.fetchMerchantPayouts({ id: this.getLoggedUser.id });
		this.fetchMerchantDetails(this.getLoggedUser.id);
		this.fetchMerchantWebhooks(this.getLoggedUser.id);
		this.fetchMerchantKyc(this.getLoggedUser.id);
	},
	methods: {
		...mapActions(['fetchMerchantDetails', 'fetchMerchantPayouts', 'fetchMerchantWebhooks', 'fetchMerchantKyc'])
	}
};
</script>
