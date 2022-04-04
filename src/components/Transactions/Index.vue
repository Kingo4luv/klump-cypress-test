<template>
	<div class="page">
		<div class="content">
			<div class="container-xl">
				<!-- Page title -->
				<OverviewHeader />
				<div class="row row-deck row-cards">
					<OverviewSalesStat />
				</div>
			</div>
			<TransactionTable :transactions="getTransactions" />
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import OverviewHeader from './OverviewHeader';
import OverviewSalesStat from '../Stats/OverviewSalesStat';
import TransactionTable from './TransactionTable';

export default {
	name: 'TransactionIndex',
	components: {
		OverviewHeader,
		OverviewSalesStat,
		TransactionTable
	},
	computed: {
		...mapGetters(['getTransactions', 'getLoggedUser'])
	},
	watch: {
		$route({ query }) {
			if (query.offset && query.limit) {
				this.fetchTransactions({
					id: this.getLoggedUser.id,
					offset: query.offset,
					limit: query.limit
				});
			} else {
				this.fetchTransactions({ id: this.getLoggedUser.id });
			}
		}
	},
	created() {
		this.fetchTransactionsMethod(this.getLoggedUser.id);
	},
	methods: {
		...mapActions(['fetchTransactions']),
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
