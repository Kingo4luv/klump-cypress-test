<template>
	<div class="content">
		<div class="container-xl">
			<div v-if="total > 0" class="card">
				<div class="card-header">
					<h3 class="card-title font-weight-bold">Payouts</h3>
				</div>
				<div class="table-responsive">
					<table class="table card-table table-vcenter text-nowrap datatable">
						<thead>
							<tr class="text-muted font-weight-bold">
								<th class="w-1 mt-3">
									<input class="form-selectgroup-label-content d-flex align-items-center" type="checkbox" />
								</th>
								<th>Reference</th>
								<th>Amount</th>
								<th>Created</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="payout in payouts.data" :key="payout.id">
								<td style="padding-right: 20px">
									<input
										class="form-selectgroup-label-content m-0 align-middle"
										type="checkbox"
										aria-label="Select invoice"
									/>
								</td>
								<td>
									<router-link :to="{ name: 'payouts', params: { id: payout.id } }" class="text-reset" tabindex="-1">
										<span>
											{{ payout.reference }}
										</span>
									</router-link>
								</td>
								<td>
									{{ payout.amount | formatCurrency(payout.currency) }}
								</td>
								<td>{{ payout.created_at | date }}</td>
								<td>
									<span class="badge bg-success m-1 align-middle" />
									Paid
								</td>
							</tr>
						</tbody>
					</table>
					<Pagination :options="{ ...options, total }" :path="'payouts'" />
				</div>
			</div>
			<div v-else class="card center">
				<p class="p-2 pt-4 pb-2 text-center font-weight-bold">You have no Payout data yet.</p>
			</div>
		</div>
	</div>
</template>
<script>
import Pagination from '../Pagination';
export default {
	name: 'PayoutTable',
	components: {
		Pagination
	},
	filters: {
		date(val) {
			return moment(val).format('llll');
		}
	},
	props: {
		payouts: {
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
		total() {
			return this.$route.name.startsWith('payout_search') ? this.payouts.data.length : this.payouts.total;
		}
	}
};
</script>
