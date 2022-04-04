<template>
	<div>
		<Header />
		<NavBar />
		<Alert v-if="getAlert.message != ''" />
		<Details />
		<Footer />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Details from '../components/ChargeBacks/Details';
import Alert from '@/components/Alerts/Alert';

export default {
	name: 'ChargeBackDetails',
	components: {
		Header,
		NavBar,
		Footer,
		Details,
		Alert
	},
	computed: {
		...mapGetters(['getStatus', 'getAlert', 'getLoggedUser', 'getMerchantDetails'])
	},
	created() {
		this.fetchChargeBackDetails({ id: this.getLoggedUser.id, customerId: this.$route.params.id });
	},
	methods: {
		...mapActions(['fetchChargeBackDetails'])
	}
};
</script>
