<template>
	<div>
		<Header />
		<NavBar />
		<Alert v-if="getAlert.message != ''" />
		<Detail />
		<Footer />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Detail from '../components/Customers/Details';
import Alert from '@/components/Alerts/Alert';

export default {
	name: 'CustomerDetails',
	components: {
		Header,
		NavBar,
		Footer,
		Detail,
		Alert
	},
	computed: {
		...mapGetters(['getStatus', 'getAlert', 'getLoggedUser'])
	},
	created() {
		this.fetchMerchantCustomer({ id: this.getLoggedUser.id, customerId: this.$route.params.id });
		this.fetchCustomerTransactions({ id: this.getLoggedUser.id, customerId: this.$route.params.id });
	},
	methods: {
		...mapActions(['fetchMerchantCustomer', 'fetchCustomerTransactions'])
	}
};
</script>
