<template>
	<div class="page">
		<div class="content">
			<div class="container-xl">
				<div class="card">
					<div class="card-body">
						<div class="container mx-auto">
							<div class="row row-sm align-items-center">
								<div class="col">
									<h4 class="text-title m-0">Amount</h4>
									<div>
										<h1 class="font-weight-bold">
											{{
												getChargeBackDetails.successful_repayment.amount
													| formatCurrency(getChargeBackDetails.successful_repayment.currency)
											}}
											<span
												v-if="getChargeBackDetails.is_resolved"
												class="btn btn-sm btn-success btn-pill ml-4 mb-2"
											>
												Resolved
											</span>
											<span v-else class="btn btn-sm btn-danger btn-pill ml-2 py-1 mb-2">
												Unresolved
											</span>
										</h1>
									</div>
								</div>
							</div>
							<hr class="m-0" />
							<div class="row row-sm align-items-center pt-4">
								<div class="col">
									<h4 class="text-title m-0">Reference</h4>
									<div>
										<h3 class="font-weight-bold">
											{{ getChargeBackDetails.successful_repayment.transaction_reference }}
											<span
												@click="
													copyToClipboard(
														getChargeBackDetails.successful_repayment.transaction_reference
													)
												"
											>
												<svg
													width="13"
													height="13"
													viewBox="0 0 13 13"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													class="ml-2 mb-2"
												>
													<path
														d="M3.375 2.75V0.875C3.375 0.70924 3.44085 0.550269 3.55806 0.433058C3.67527 0.315848 3.83424 0.25 4 0.25H11.5C11.6658 0.25 11.8247 0.315848 11.9419 0.433058C12.0592 0.550269 12.125 0.70924 12.125 0.875V9.625C12.125 9.79076 12.0592 9.94973 11.9419 10.0669C11.8247 10.1842 11.6658 10.25 11.5 10.25H9.625V12.125C9.625 12.47 9.34375 12.75 8.99562 12.75H1.50437C1.42195 12.7505 1.34025 12.7347 1.26395 12.7035C1.18765 12.6723 1.11827 12.6264 1.05979 12.5683C1.0013 12.5102 0.954871 12.4412 0.923159 12.3651C0.891447 12.289 0.875081 12.2074 0.875 12.125L0.876875 3.375C0.876875 3.03 1.15813 2.75 1.50625 2.75H3.375ZM2.12687 4L2.125 11.5H8.375V4H2.12687ZM4.625 2.75H9.625V9H10.875V1.5H4.625V2.75Z"
														:fill="isCopied ? '#45d624' : '#5C5C5C'"
													/>
												</svg>
											</span>
										</h3>
									</div>
								</div>
								<div class="col">
									<h4 class="text-title m-0">Paid At</h4>
									<div>
										<h3 class="font-weight-bold">
											{{ getChargeBackDetails.created_at | date }}
										</h3>
									</div>
								</div>
							</div>
							<hr class="m-0" />
							<div class="row row-sm align-items-center pt-4">
								<div class="col">
									<h4 class="text-title m-0">Message</h4>
									<div>
										<h3 class="font-weight-bold">
											{{ getChargeBackDetails.reason }}
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-body">
						<div class="container mx-auto">
							<ul class="nav nav-tabs" data-toggle="tabs">
								<li class="mb-2 mr-2">
									<a
										href="#tabs-home-ex1"
										class="form-selectgroup-label font-weight-bold text-primary bg-light"
										>Items</a
									>
								</li>
							</ul>
							<div class="tab-content pt-4">
								<div id="tabs-home-ex1" class="tab-pane active show">
									<div class="row row-sm align-items-center">
										<div
											v-for="item in getChargeBackDetails.successful_repayment.loan.items"
											:key="item.id"
											class="col-12 col-md-6 px-0"
										>
											<div class="d-flex">
												<span>
													<img :src="item.image_url" class="rounded-circle img-size" />
												</span>

												<div class="m-2 px-3">
													<h4 class="card-title m-0">
														<a href="#">
															<span class="text-title">{{ item.name }}</span>
														</a>
													</h4>
													<div class="text-muted mt-2">
														{{
															item.unit_price
																| formatCurrency(getChargeBackDetails.currency)
														}}
													</div>
												</div>
											</div>
											<hr :key="item.id + '1'" class="mt-4" />
										</div>
									</div>
								</div>
								<div id="tabs-profile-ex1" class="tab-pane">
									<div class="row row-sm align-items-center">
										<div class="col">
											<div class="text-muted">Card Type</div>
											<h4 class="text-title m-0">Mastercard Debit</h4>
										</div>
										<div class="col">
											<div class="text-muted">Card Number</div>
											<h4 class="text-title m-0">539939 **** 8378</h4>
										</div>
										<div class="col">
											<div class="text-muted">Authorization</div>
											<h4 class="text-title m-0">AUTH_79w03zv6c5</h4>
										</div>
										<div class="col">
											<div class="text-muted">Bank and Country</div>
											<h4 class="text-title m-0">Guaranty Trust Bank (Nigeria)</h4>
										</div>
									</div>
									<hr class="mt-4" />
									<div class="row row-sm align-items-center mb-4">
										<div class="col">
											<div class="text-muted">IP Address</div>
											<h4 class="text-title m-0">41.23.42.838</h4>
										</div>
										<div class="col">
											<button class="btn btn-primary p-2 text-white">
												<svg
													width="21"
													height="17"
													viewBox="0 0 21 17"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													class="mr-2"
												>
													<path
														d="M11 11.5H13C14.6404 11.4994 16.2498 11.9471 17.6541 12.7949C19.0585 13.6427 20.2044 14.8582 20.968 16.31C20.9895 16.0405 21.0001 15.7703 21 15.5C21 9.977 16.523 5.5 11 5.5V0L0.499998 8.5L11 17V11.5ZM13 9.5H9V12.808L3.679 8.5L9 4.192V7.5H11C12.1497 7.49871 13.2862 7.74582 14.3316 8.22442C15.377 8.70302 16.3067 9.40182 17.057 10.273C15.7657 9.76122 14.389 9.49892 13 9.5Z"
														fill="white"
													/>
												</svg>
												Refund Customer
											</button>
										</div>
										<div class="col" />
										<div class="col" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="pt-6 pb-4">
					<ValidationObserver v-slot="{ invalid }">
						<form @submit.prevent="handleComment">
							<div class="mb-3">
								<ValidationProvider v-slot="{ errors }" rules="required|min:5" tag="div">
									<textarea
										v-model="comment"
										class="form-control"
										name="example-textarea-input"
										rows="6"
										placeholder="Comment on this issue..."
										spellcheck="false"
									/>
									<div class="invalid-feedback">
										{{ errors[0] }}
									</div>
								</ValidationProvider>
							</div>
							<button type="submit" class="btn btn-primary float-right" :disabled="invalid">
								Submit
							</button>
						</form>
					</ValidationObserver>
				</div>
				<div v-if="getChargeBackDetails.comments.length > 0" class="pt-2">
					<hr />
					<div
						v-for="comment in getChargeBackDetails.comments"
						:key="comment.id"
						class="my-4 pb-2"
						style="border-bottom: dashed 0.16rem #c4c4c4"
					>
						<div v-if="comment.admin_commenter">
							<h3 class="fs-15 leading-17 font-weight-bold">
								{{ comment.admin_commenter.firstname }} {{ comment.admin_commenter.lastname }}
								<span class="btn btn-sm btn-success btn-pill ml-2">Admin</span>
							</h3>
						</div>
						<div v-else>
							<h3 class="fs-15 leading-17 font-weight-bold">
								{{ comment.merchant_commenter.firstname }} {{ comment.merchant_commenter.lastname
								}}<span class="btn btn-sm btn-primary btn-pill ml-2">Merchant</span>
							</h3>
						</div>
						<h3 class="font-weight-normal" style="color: #141414; font-size: 15px">
							{{ comment.comment }}
						</h3>
						<p class="pb-2 leading-17 fs-12">
							{{ comment.created_at | date }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '@/validations.js';
import copy from 'copy-to-clipboard';
export default {
	name: 'Details',
	filters: {
		date(val) {
			return moment(val).format('llll');
		}
	},
	components: {
		ValidationObserver,
		ValidationProvider
	},
	data() {
		return {
			isCopied: false,
			newComment: ''
		};
	},
	computed: {
		...mapGetters(['getChargeBackDetails', 'getLoggedUser'])
	},
	methods: {
		...mapActions(['addComment']),
		copyToClipboard(val) {
			copy(val, {
				debug: true,
				format: 'text/plain',
				message: 'Hello',
				onCopy: () => {
					this.isCopied = true;
				}
			});
			setTimeout(() => {
				this.isCopied = false;
			}, 1000);
		},
		handleComment() {
			this.addComment({
				id: this.getLoggedUser.id,
				chargeBackId: this.$route.params.id,
				payload: {
					comment: this.newComment
				}
			});
			this.comment = '';
		}
	}
};
</script>
