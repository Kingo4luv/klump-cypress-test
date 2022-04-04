<template>
	<div>
		<Header />
		<NavBar />
		<div class="content">
			<div
				class="container-xl"
				:class="getStatus === 'error' || getCustomerSearchResults.data.length === 0 ? 'card' : ''"
			>
				<div v-if="getStatus === 'success' && getCustomerSearchResults.data.length > 0" class="page-header">
					<div class="row align-items-center">
						<div class="col-auto">
							<h2 class="page-title">{{ getCustomerSearchResults.total }} Search results found</h2>
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

						<CustomersTable
							v-if="getStatus === 'success' && getCustomerSearchResults.data.length > 0"
							:customers="getCustomerSearchResults"
						/>
					</div>
				</div>
				<div
					v-if="getStatus === 'success' && getCustomerSearchResults.data.length === 0"
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
import CustomersTable from '../components/Customers/CustomersTable';

export default {
	name: 'CustomerSearch',
	components: {
		Header,
		NavBar,
		CustomersTable
	},
	data() {
		return {
			query: this.$route.query.query
		};
	},
	computed: {
		...mapGetters(['getStatus', 'getAlert', 'getLoggedUser', 'getCustomerSearchResults'])
	},
	watch: {
		$route(value) {
			this.searchCustomers({ id: this.getLoggedUser.id, query: value.query.query });
		}
	},
	created() {
		this.searchCustomers({ id: this.getLoggedUser.id, query: this.query });
	},
	methods: {
		...mapActions(['searchCustomers'])
	}
};
</script>
