<template>
	<div class="page">
		<div class="content">
			<div class="container-xl">
				<CustomerDetails v-if="!editCustomerDetails" @open-edit-details="openEditDetails" />
				<EditCustomerDetails v-else />
				<CustomerTransactionsTable :transactions="getCustomerTransactions" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CustomerTransactionsTable from './CustomerTransactionsTable';
import CustomerDetails from './CustomerDetails';
import EditCustomerDetails from './EditCustomerDetails';

export default {
	name: 'Details',
	components: {
		CustomerTransactionsTable,
		CustomerDetails,
		EditCustomerDetails
	},
	data() {
		return {
			editCustomerDetails: false,
			customerId: this.$route.params.id
		};
	},
	computed: {
		...mapGetters(['getCustomerTransactions', 'getLoggedUser'])
	},
	watch: {
		$route({ query }) {
			if (query.offset && query.limit) {
				this.fetchCustomerTransactions({
					id: this.getLoggedUser.id,
					customerId: this.customerId,
					offset: query.offset,
					limit: query.limit
				});
			} else {
				this.fetchCustomerTransactions({
					id: this.getLoggedUser.id,
					customerId: this.customerId
				});
			}
		}
	},
	methods: {
		...mapActions(['fetchCustomerTransactions']),
		openEditDetails(bool) {
			this.editCustomerDetails = bool;
		}
	}
};
</script>
