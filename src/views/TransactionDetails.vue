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
import Detail from '../components/Transactions/Details';
import Alert from '@/components/Alerts/Alert';

export default {
	name: 'TransactionDetails',
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
		this.fetchTransaction({ id: this.getLoggedUser.id, transactionId: this.$route.params.id });
	},
	methods: {
		...mapActions(['fetchTransaction'])
	}
};
</script>
