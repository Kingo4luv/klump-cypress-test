<template>
	<div v-if="transactions.total > 0">
		<div class="card">
			<div>
				<div class="card-header">
					<h3 class="card-title font-weight-bold">Transactions</h3>
				</div>
				<div class="table-responsive">
					<table class="table card-table table-vcenter text-nowrap datatable">
						<thead>
							<tr>
								<th>STATUS</th>
								<th>PRICE</th>
								<th>REF NUMBER</th>
								<th>CREATED</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="transaction in transactions.data" :key="transaction.id" class="font-weight-bold">
								<td>
									<span class="badge bg-success m-0 align-middle" />
									Paid
								</td>
								<td>{{ transaction.amount | formatCurrency(transaction.currency) }}</td>
								<td>{{ transaction.reference }}</td>
								<td>{{ transaction.created_at | date }}</td>
							</tr>
						</tbody>
					</table>
					<Pagination
						v-if="transactions.total > 10"
						:options="{ ...options, total: transactions.total }"
						:path="`${customerId}\customer_details`"
					/>
				</div>
			</div>
		</div>
	</div>
	<div v-else class="card center">
		<p class="p-2 pt-4 pb-2 text-center font-weight-bold">This customer has no transaction.</p>
	</div>
</template>

<script>
import Pagination from '../Pagination';
export default {
	name: 'CustomerTransactionsTable',
	components: {
		Pagination
	},
	filters: {
		date(val) {
			return moment(val).format('llll');
		}
	},
	props: {
		transactions: {
			type: Object,
			default: () => ({}),
			required: true
		}
	},
	data() {
		return {
			options: {
				limit: 10,
				offset: 0
			},
			customerId: this.$route.params.id
		};
	}
};
</script>

<style></style>
