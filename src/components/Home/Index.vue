<template>
	<div class="page">
		<div class="content">
			<div class="container-xl">
				<!-- Page title -->
				<OverviewHeader />
				<div class="row row-deck row-cards">
					<OverviewSalesStat />
					<OverviewRevenueStat />
					<OverviewPayoutStat />
					<OverviewNewUsersStat />
				</div>
			</div>
			<TransactionTable :transactions="getTransactions" />
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import OverviewHeader from './OverviewHeader';
import OverviewNewUsersStat from '../Stats/OverviewNewUsersStat';
import OverviewPayoutStat from '../Stats/OverviewPayoutStat';
import OverviewRevenueStat from '../Stats/OverviewRevenueStat';
import OverviewSalesStat from '../Stats/OverviewSalesStat';
import TransactionTable from '../Transactions/TransactionTable';

export default {
	name: 'HomeIndex',
	components: {
		OverviewHeader,
		OverviewSalesStat,
		OverviewRevenueStat,
		OverviewPayoutStat,
		OverviewNewUsersStat,
		TransactionTable
	},
	computed: {
		...mapGetters(['getTransactions', 'getLoggedUser'])
	},
	watch: {
		$route({ query }) {
			if (query.offset && query.limit) {
				this.fetchTransactions(query.offset, query.limit);
			} else {
				this.fetchTransactions();
			}
		}
	},
	created() {
		this.fetchTransactionsMethod(this.getLoggedUser.id);
		this.fetchMerchantDetails(this.getLoggedUser.id);
	},
	methods: {
		...mapActions(['fetchTransactions', 'fetchMerchantDetails']),
		fetchTransactionsMethod(id) {
			const query = this.$route.query.offset && this.$route.query.limit ? this.$route.query : null;
			if (query) {
				this.fetchTransactions({
					id,
					offset: query.offset,
					limit: query.limit
				});
			} else {
				this.fetchTransactions({ id });
			}
		}
	}
};
</script>
