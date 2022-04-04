<template>
	<div class="box">
		<div class="card">
			<div class="table-responsive">
				<table class="table table-vcenter table-mobile-md card-table">
					<thead>
						<tr>
							<th class="w-50">Name</th>
							<th class="w-50">Contact</th>
							<th />
						</tr>
					</thead>
					<tbody>
						<tr v-for="customer in customers.data" :key="customer.id">
							<td id="userInitials" data-label="Name">
								<div class="d-flex lh-sm py-1 align-items-center">
									<span class="avatar rounded mr-2">{{
										getInitials(customer.customer.firstname, customer.customer.lastname)
									}}</span>
									<div class="flex-fill">
										<div class="strong">
											<router-link
												:to="{ name: 'customer_details', params: { id: customer.user_id } }"
												class="text-reset"
											>
												{{ customer.customer.firstname }} {{ customer.customer.lastname }}
											</router-link>
										</div>
									</div>
								</div>
							</td>
							<td data-label="Title">
								<div id="userPhone" class="table-items text-black">
									{{ customer.customer.phone }}
								</div>
								<div class="text-muted text-h5">
									<a
										id="userEmail"
										href="#"
										class="table-items"
										style="font-weight: 400; color: #737883"
										>{{ customer.customer.email }}</a
									>
								</div>
							</td>
							<td>
								<div class="btn-list flex-nowrap">
									<router-link
										:to="{ name: 'customer_details', params: { id: customer.user_id } }"
										class="button-white border rounded-lg font-weight-bold"
										style="color: black"
									>
										View
									</router-link>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<Pagination
					v-if="customers.total > 10"
					:options="{ ...options, total: customers.total }"
					:path="routeName === 'customers' ? 'customers' : 'search'"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Pagination from '../Pagination';
export default {
	name: 'CustomersTable',
	components: {
		Pagination
	},
	props: {
		customers: {
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
			routeName: this.$route.name
		};
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

<style></style>
