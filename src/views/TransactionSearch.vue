<template>
	<div>
		<Header />
		<NavBar />
		<div class="content">
			<div
				class="container-xl"
				:class="getStatus === 'error' || getTransactionSearchResults.data.length === 0 ? 'card' : ''"
			>
				<div v-if="getStatus === 'success' && getTransactionSearchResults.data.length > 0" class="page-header">
					<div class="row align-items-center">
						<div class="col-auto">
							<h2 class="page-title">
								{{ getTransactionSearchResults.data.length }} Search results found
							</h2>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-12 col-md-12">
						<div
							v-if="getStatus === 'loading'"
							class="w-100 d-flex align-items-center justify-content-center text-center"
						>
							<div class="spinner-border spinner-border-xl text-primary" role="status" />
						</div>

						<TransactionTable
							v-if="getStatus === 'success' && getTransactionSearchResults.data.length > 0"
							:transactions="getTransactionSearchResults"
						/>
					</div>
				</div>
				<div
					v-if="getStatus === 'success' && getTransactionSearchResults.data.length === 0"
					class="w-100 d-flex align-items-center justify-content-center text-center"
				>
					<p class="p-2 pt-4 pb-2 text-center font-weight-bold">No results found</p>
				</div>
				<div
					v-if="getStatus === 'error'"
					class="w-100 d-flex align-items-center justify-content-center text-center"
				>
					<p class="p-2 pt-4 pb-2 text-center font-weight-bold">Something went wrong</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import TransactionTable from '../components/Transactions/TransactionTable';

export default {
	name: 'TransactionSearch',
	components: {
		Header,
		NavBar,
		TransactionTable
	},
	data() {
		return {
			query: this.$route.query.query
		};
	},
	computed: {
		...mapGetters(['getStatus', 'getAlert', 'getLoggedUser', 'getTransactionSearchResults'])
	},
	created() {
		this.searchTransactions({ id: this.getLoggedUser.id, query: this.query });
	},
	methods: {
		...mapActions(['searchTransactions'])
	}
};
</script>
