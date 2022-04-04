<template>
	<div class="content">
		<div class="container-xl">
			<section v-if="getStatus === 'loading'">
				<div class="card">
					<div class="card-header">
						<h3 class="card-title font-weight-bold">Transactions</h3>
					</div>
					<div class="table-responsive">
						<table class="table card-table table-vcenter text-nowrap datatable">
							<thead>
								<tr>
									<th class="w-1 mt-3">
										<input
											class="form-selectgroup-label-content d-flex align-items-center"
											type="checkbox"
										/>
									</th>
									<th>Reference</th>
									<th>Amount</th>
									<th>Commission</th>
									<th>Interest</th>
									<th>Status</th>
									<th>Merchant Payout Amount</th>
									<th class="pl-5">Created</th>
								</tr>
							</thead>
						</table>
					</div>
					<Loader />
				</div>
			</section>
			<section v-else>
				<div v-if="transactions && transactions.data && transactions.data.length > 0" class="card">
					<div class="card-header">
						<h3 class="card-title font-weight-bold">Transactions</h3>
					</div>
					<div class="table-responsive">
						<table class="table card-table table-vcenter text-nowrap datatable">
							<thead>
								<tr>
									<th class="w-1 mt-3">
										<input
											class="form-selectgroup-label-content d-flex align-items-center"
											type="checkbox"
										/>
									</th>
									<th>Reference</th>
									<th>Amount</th>
									<th>Commission</th>
									<th>Interest</th>
									<th>Status</th>
									<th>Merchant Payout Amount</th>
									<th class="pl-5">Created</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="transaction in transactions.data" :key="transaction.id">
									<td style="padding-right: 20px">
										<input
											class="form-selectgroup-label-content m-0 align-middle"
											type="checkbox"
											aria-label="Select invoice"
										/>
									</td>
									<td>
										<router-link
											:to="{ name: 'transaction_details', params: { id: transaction.id } }"
											class="text-reset"
											tabindex="-1"
										>
											<span>
												{{ transaction.reference }}
											</span>
										</router-link>
									</td>
									<td>
										{{ transaction.amount | formatCurrency(transaction.currency) }}
									</td>
									<td>{{ transaction.commission }}&#x25;</td>
									<td>
										<span class="flag flag-country-us" />
										{{ transaction.interest }}&#x25;
									</td>
									<td class="text-capitalize">
										<span
											class="badge m-0 align-middle mr-1"
											:class="statusColorClass(transaction.status)"
										/>
										{{ replaceUnderScoreWithSpace(transaction.status) }}
									</td>
									<td>
										{{ transaction.merchant_payout_amount | formatCurrency(transaction.currency) }}
									</td>
									<td class="pl-5">
										{{ transaction.created_at | date }}
									</td>
								</tr>
							</tbody>
						</table>
						<Pagination
							v-if="transactions.total > 10"
							:options="{ ...options, total: transactions.total }"
							:path="'transactions'"
						/>
					</div>
				</div>
				<div v-else class="card center">
					<p class="p-2 pt-4 pb-2 text-center font-weight-bold">You have no transactions yet.</p>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Pagination from '../Pagination';
import Loader from '@/components/Loader';
export default {
	name: 'TransactionTable',
	components: {
		Pagination,
		Loader
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
			}
		};
	},
	computed: {
		...mapGetters(['getStatus']),
		statusColorClass() {
			return (status) => (status === 'successful' ? 'bg-success' : status === 'new' ? 'bg-warning' : 'bg-danger');
		}
	},
	methods: {
		replaceUnderScoreWithSpace(val) {
			return val.replace('_', ' ');
		}
	}
};
</script>
