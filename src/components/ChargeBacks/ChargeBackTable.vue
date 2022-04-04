<template>
	<div class="content">
		<div class="container-xl">
			<div v-if="total > 0" class="card">
				<div class="card-header">
					<h3 class="card-title font-weight-bold">Charge Backs</h3>
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
								<th>Name</th>
								<th>Amount</th>
								<th>Reference</th>
								<th>Charge Back Status</th>
								<th class="pl-5">Created</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="chargeBack in chargeBacks.data" :key="chargeBack.id">
								<td style="padding-right: 20px">
									<input
										class="form-selectgroup-label-content m-0 align-middle"
										type="checkbox"
										aria-label="Select invoice"
									/>
								</td>
								<td id="userInitials" data-label="Name">
									<div class="d-flex lh-sm py-1 align-items-center">
										<span class="avatar rounded mr-2">{{
											getInitials(
												chargeBack.successful_repayment.customer.firstname,
												chargeBack.successful_repayment.customer.lastname
											)
										}}</span>
										<div class="flex-fill">
											<div class="strong">
												<router-link
													:to="{
														name: 'customer_details',
														params: { id: chargeBack.user_id }
													}"
													class="text-reset"
												>
													{{ chargeBack.successful_repayment.customer.firstname }}
													{{ chargeBack.successful_repayment.customer.lastname }}
												</router-link>
											</div>
										</div>
									</div>
								</td>
								<td>
									{{
										chargeBack.successful_repayment.amount
											| formatCurrency(chargeBack.successful_repayment.currency)
									}}
								</td>
								<td>
									<router-link
										:to="{ name: 'charge_details', params: { id: chargeBack.id } }"
										class="text-reset"
									>
										{{ chargeBack.transaction_reference }}
									</router-link>
								</td>
								<td v-if="chargeBack.is_resolved">
									<span class="badge bg-success m-0 align-middle mr-1" />
									Resolved
								</td>
								<td v-else>
									<span class="badge bg-danger m-0 align-middle mr-1" />
									Unresolved
								</td>
								<td class="pl-5">
									{{ chargeBack.created_at | date }}
								</td>
							</tr>
						</tbody>
					</table>
					<Pagination v-if="total > 10" :options="{ ...options, total }" :path="'chargeBacks'" />
				</div>
			</div>
			<div v-else class="card center">
				<p class="p-2 pt-4 pb-2 text-center font-weight-bold">You have no charge backs yet.</p>
			</div>
		</div>
	</div>
</template>

<script>
import Pagination from '../Pagination';
export default {
	name: 'ChargeBackTable',
	components: {
		Pagination
	},
	filters: {
		date(val) {
			return moment(val).format('llll');
		}
	},
	props: {
		chargeBacks: {
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
			return this.$route.name === 'charge_back_search' ? this.chargeBacks.data.length : this.chargeBacks.total;
		}
	},
	methods: {
		getInitials(firstname, lastname) {
			const firstNameInitial = firstname.charAt(0);
			const lastNameInitial = lastname.charAt(0);
			return `${firstNameInitial} ${lastNameInitial}`;
		}
	}
};
</script>
