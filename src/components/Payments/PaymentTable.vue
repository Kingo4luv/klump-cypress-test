<template>
	<div class="content">
		<div class="container-xl">
			<div class="mb-3 d-flex justify-content-end">
				<button
					class="button-primary text-white d-inline-flex align-items-center px-3"
					style="padding-top: 10px; padding-bottom: 10px; outline: none"
					data-toggle="modal"
					data-target="#modal-report"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-1"
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
					>
						<path
							d="M5.5 0.75C5.5 0.551088 5.42098 0.360322 5.28033 0.21967C5.13968 0.0790177 4.94891 0 4.75 0C4.55109 0 4.36032 0.0790177 4.21967 0.21967C4.07902 0.360322 4 0.551088 4 0.75V4H0.75C0.551088 4 0.360322 4.07902 0.21967 4.21967C0.0790177 4.36032 0 4.55109 0 4.75C0 4.94891 0.0790177 5.13968 0.21967 5.28033C0.360322 5.42098 0.551088 5.5 0.75 5.5H4V8.75C4 8.94891 4.07902 9.13968 4.21967 9.28033C4.36032 9.42098 4.55109 9.5 4.75 9.5C4.94891 9.5 5.13968 9.42098 5.28033 9.28033C5.42098 9.13968 5.5 8.94891 5.5 8.75V5.5H8.75C8.94891 5.5 9.13968 5.42098 9.28033 5.28033C9.42098 5.13968 9.5 4.94891 9.5 4.75C9.5 4.55109 9.42098 4.36032 9.28033 4.21967C9.13968 4.07902 8.94891 4 8.75 4H5.5V0.75Z"
							fill="white"
						/>
					</svg>
					<span style="display: inline-block; font-weight: 500"> Create New Payment Page </span>
				</button>
			</div>
			<div class="card">
				<div class="table-responsive">
					<table class="table card-table table-vcenter text-nowrap datatable">
						<thead>
							<tr class="text-muted font-weight-bold">
								<th>Name</th>
								<th>Type</th>
								<th>Amount</th>
								<th>Created</th>
								<th>Link</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="page in pages.data" :key="page.id">
								<td>
									<router-link
										:to="{ name: 'payment_details', params: { id: 1 } }"
										class="table-items"
										tabindex="-1"
									>
										{{ page.name }}
									</router-link>
								</td>
								<td class="table-items">Payment</td>
								<td class="table-items">&#8358;{{ page.fixed_amount }}</td>
								<td class="table-items">
									{{ new Date(page.created_at).toDateString() }}
								</td>
								<td>
									<router-link
										:to="{ name: 'payment_details', params: { id: page.id } }"
										style="color: #1a90e5"
									>
										Preview
									</router-link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<pagination :options="{ ...options, total: pages.total }" :path="'payments'" />
			</div>
		</div>
	</div>
</template>
<script>
import Pagination from '../Pagination.vue';
export default {
	name: 'PaymentTable',
	components: { Pagination },
	props: {
		pages: {
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
	}
};
</script>
