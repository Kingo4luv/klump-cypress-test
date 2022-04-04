<template>
	<div>
		<Header />
		<NavBar />
		<div class="content">
			<div class="container-xl" :class="getStatus === 'error' ? 'card' : ''">
				<div v-if="getStatus === 'success'" class="page-header">
					<div class="row align-items-center">
						<div class="col-auto">
							<h2 class="page-title">{{ getPayoutSearchResults.data.length }} Search results found</h2>
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
						<div
							v-if="getStatus === 'success' && !getPayoutSearchResults.data.length"
							class="w-100 d-flex align-items-center justify-content-center text-center"
						>
							<div class="card center">
								<p class="p-2 pt-4 pb-2 text-center font-weight-bold">No results found</p>
							</div>
						</div>

						<PayoutTable
							v-if="getStatus === 'success' && getPayoutSearchResults.data.length > 0"
							:payouts="getPayoutSearchResults"
						/>
					</div>
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
import PayoutTable from '../components/Payouts/PayoutTable';

export default {
	name: 'PayoutSearch',
	components: {
		Header,
		NavBar,
		PayoutTable
	},
	data() {
		return {
			query: this.$route.query.query
		};
	},
	computed: {
		...mapGetters(['getStatus', 'getAlert', 'getLoggedUser', 'getPayoutSearchResults'])
	},
	watch: {
		$route(value) {
			this.searchPayouts({ id: this.getLoggedUser.id, query: value.query.query });
		}
	},
	created() {
		this.searchPayouts({ id: this.getLoggedUser.id, query: this.query });
	},
	methods: {
		...mapActions(['searchPayouts'])
	}
};
</script>
