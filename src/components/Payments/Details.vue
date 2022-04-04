<template>
	<div class="page">
		<div class="content">
			<div class="container-xl">
				<div class="card">
					<div v-if="getStatus === 'loading'" class="py-5">
						<loader />
					</div>
					<div v-else class="card-body">
						<div class="row row-sm align-items-center">
							<div class="col">
								<h4 class="card-title mb-3">
									<a
										href="#"
										class="label-text"
										style="color: black; font-size: 24px; line-height: 33px"
										>{{ getMerchantPaymentPageDetails.name }}</a
									>
								</h4>
								<h3 class="label-text" style="font-weight: 500; color: black; font-size: 16px">
									{{ externalLink }}
									<span class="cursor-pointer" @click="copyToClipboard(externalLink)">
										<svg
											class="ml-2 mb-2"
											xmlns="http://www.w3.org/2000/svg"
											width="13"
											height="13"
											viewBox="0 0 13 13"
											fill="none"
										>
											<path
												d="M3.375 2.75V0.875C3.375 0.70924 3.44085 0.550269 3.55806 0.433058C3.67527 0.315848 3.83424 0.25 4 0.25H11.5C11.6658 0.25 11.8247 0.315848 11.9419 0.433058C12.0592 0.550269 12.125 0.70924 12.125 0.875V9.625C12.125 9.79076 12.0592 9.94973 11.9419 10.0669C11.8247 10.1842 11.6658 10.25 11.5 10.25H9.625V12.125C9.625 12.47 9.34375 12.75 8.99562 12.75H1.50437C1.42195 12.7505 1.34025 12.7347 1.26395 12.7035C1.18765 12.6723 1.11827 12.6264 1.05979 12.5683C1.0013 12.5102 0.954871 12.4412 0.923159 12.3651C0.891447 12.289 0.875081 12.2074 0.875 12.125L0.876875 3.375C0.876875 3.03 1.15813 2.75 1.50625 2.75H3.375ZM2.12687 4L2.125 11.5H8.375V4H2.12687ZM4.625 2.75H9.625V9H10.875V1.5H4.625V2.75Z"
												:fill="isCopied ? '#45d624' : '#5C5C5C'"
											/>
										</svg>
									</span>
									<a :href="externalLink">
										<span>
											<svg
												class="ml-3 mb-2"
												xmlns="http://www.w3.org/2000/svg"
												width="13"
												height="13"
												viewBox="0 0 13 13"
												fill="none"
											>
												<path
													d="M5.25 2.75V4H2.125V10.875H9V7.75H10.25V11.5C10.25 11.6658 10.1842 11.8247 10.0669 11.9419C9.94973 12.0592 9.79076 12.125 9.625 12.125H1.5C1.33424 12.125 1.17527 12.0592 1.05806 11.9419C0.940848 11.8247 0.875 11.6658 0.875 11.5V3.375C0.875 3.20924 0.940848 3.05027 1.05806 2.93306C1.17527 2.81585 1.33424 2.75 1.5 2.75H5.25ZM12.125 0.875V6.5L9.75375 4.12937L6.00437 7.87937L5.12063 6.99563L8.87 3.24563L6.5 0.875H12.125Z"
													fill="#4062D1"
												/>
											</svg>
										</span>
									</a>
								</h3>
							</div>
						</div>
						<hr class="my-3" />
						<div class="row row-sm">
							<div class="col">
								<h4 class="card-title m-0">
									<span class="label-text" style="color: #5c5c5c; font-size: 14px; line-height: 19px"
										>Status</span
									>
								</h4>
								<div>
									<h3 class="label-text" style="font-weight: 500; color: black">
										Published
										<label
											class="form-check form-switch d-inline-flex ml-2"
											style="transform: translate(0px, 5px)"
										>
											<input
												class="form-check-input"
												type="checkbox"
												:checked="getMerchantPaymentPageDetails.is_published"
												@change="updatePublished"
											/>
										</label>
									</h3>
								</div>
							</div>
							<div class="col">
								<h4 class="card-title mb-2">
									<span class="label-text" style="color: #5c5c5c; font-size: 14px; line-height: 19px"
										>Page Type</span
									>
								</h4>
								<div>
									<h3 class="label-text" style="font-weight: 500; color: black">Payment</h3>
								</div>
							</div>
							<div class="col">
								<h4 class="card-title mb-2">
									<span class="label-text" style="color: #5c5c5c; font-size: 14px; line-height: 19px"
										>Currency</span
									>
								</h4>
								<div>
									<h3 class="label-text" style="font-weight: 500; color: black">
										{{ getMerchantPaymentPageDetails.currency }}
									</h3>
								</div>
							</div>
						</div>
						<hr class="my-3" />
						<div class="row row-sm">
							<div class="col">
								<h4 class="card-title mb-2">
									<span class="label-text" style="color: #5c5c5c; font-size: 14px; line-height: 19px"
										>Description</span
									>
								</h4>
								<div>
									<h3 class="label-text" style="font-weight: 500; color: black">
										{{ getMerchantPaymentPageDetails.description }}
									</h3>
								</div>
							</div>
							<div class="col">
								<h4 class="card-title mb-2">
									<span class="label-text" style="color: #5c5c5c; font-size: 14px; line-height: 19px"
										>Created on</span
									>
								</h4>
								<div>
									<h3 class="label-text" style="font-weight: 500; color: black">
										{{ new Date(getMerchantPaymentPageDetails.created_at).toDateString() }}
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="content">
			<div class="container-xl">
				<div class="card">
					<div class="card-header">
						<h3 class="card-title font-weight-bold">Recent Payments</h3>
					</div>
					<div class="table-responsive">
						<table class="table card-table table-vcenter text-nowrap datatable">
							<thead>
								<tr class="text-muted font-weight-bold">
									<th>Name</th>
									<th>Email</th>
									<th>Amount</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<router-link to="#" class="table-items" tabindex="-1">
											Edmond Benson</router-link
										>
									</td>
									<td class="table-items">edmondbenson@mail.com</td>
									<td class="table-items">&#8358;50,000.00</td>
									<td class="table-items">Jan 31, 2021</td>
								</tr>
								<tr>
									<td>
										<router-link to="#" class="table-items" tabindex="-1">
											Edmond Benson</router-link
										>
									</td>
									<td class="table-items">edmondbenson@mail.com</td>
									<td class="table-items">&#8358;50,000.00</td>
									<td class="table-items">Jan 31, 2021</td>
								</tr>
								<tr>
									<td>
										<router-link to="#" class="table-items" tabindex="-1">
											Edmond Benson</router-link
										>
									</td>
									<td class="table-items">edmondbenson@mail.com</td>
									<td class="table-items">&#8358;50,000.00</td>
									<td class="table-items">Jan 31, 2021</td>
								</tr>
								<tr>
									<td>
										<router-link to="#" class="table-items" tabindex="-1">
											Edmond Benson</router-link
										>
									</td>
									<td class="table-items">edmondbenson@mail.com</td>
									<td class="table-items">&#8358;50,000.00</td>
									<td class="table-items">Jan 31, 2021</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="card-footer d-flex align-items-center" id="pagination">
						<p class="m-0 text-muted">
							Showing <span>1</span> to <span>8</span> of <span>16</span> entries
						</p>
						<ul class="pagination m-0 ml-auto">
							<li class="page-item disabled">
								<a class="page-link" href="#" tabindex="-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<polyline points="15 6 9 12 15 18" />
									</svg>
									prev
								</a>
							</li>
							<li class="page-item"><a class="page-link" href="#">1</a></li>
							<li class="page-item active"><a class="page-link" href="#">2</a></li>
							<li class="page-item"><a class="page-link" href="#">3</a></li>
							<li class="page-item"><a class="page-link" href="#">4</a></li>
							<li class="page-item"><a class="page-link" href="#">5</a></li>
							<li class="page-item">
								<a class="page-link" href="#">
									next
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<polyline points="9 6 15 12 9 18" />
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
import settingApiMixin from '../../mixins/settingApiMixin';
import { mapActions, mapGetters } from 'vuex';
import Loader from '../Loader.vue';
export default {
	name: 'Details',
	components: { Loader },
	mixins: [settingApiMixin],
	computed: {
		...mapGetters(['getLoggedUser', 'getStatus', 'getMerchantPaymentPageDetails', 'getAlert']),
		externalLink() {
			return `${process.env.VUE_APP_EXTERNAL_PAGE_URL_DOMAIN}/pay/${this.getMerchantPaymentPageDetails.id}`;
		}
	},
	mounted() {
		this.fetchMerchantPaymentPageDetails({
			merchantId: this.getLoggedUser.id,
			pageId: this.$route.params.id
		});
	},
	methods: {
		...mapActions(['fetchMerchantPaymentPageDetails', 'updatePaymentPage']),
		updatePublished() {
			const published = !this.getMerchantPaymentPageDetails.is_published;
			this.updatePaymentPage({
				merchantId: this.getLoggedUser.id,
				pageId: this.$route.params.id,
				payload: { is_published: published }
			});
		}
	}
};
</script>

<style scoped>
.form-switch .form-check-input {
	height: 20px;
	width: 35px;
}
.form-switch .form-check-input:focus {
	border-color: rgba(0, 0, 0, 0.25);
	outline: 0;
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(0,0,0,0.25)'/></svg>");
}
.form-switch .form-check-input:checked {
	background-color: #27a844;
	border-color: #27a844;
	border: none;
	background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba(255,255,255,1.0)'/></svg>");
}
</style>
