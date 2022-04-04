<template>
	<div class="page">
		<div class="content">
			<div class="container-xl">
				<div class="card">
					<div class="card-body">
						<div class="row row-sm align-items-center mx-auto">
							<div class="col-auto">
								<span>
									<span class="avatar avatar-lg mr-2 text-white bg-primary">
										{{ getUserInitials }}
									</span>
								</span>
							</div>
							<div class="col">
								<h4 class="card-title m-0">
									<a href="#" class="label-text font-weight-bold">
										{{ getUserFirstname }} {{ getUserLastname }}
									</a>
								</h4>
								<div class="label-text" style="line-height: 19px; font-size: 14px; color: #5c5c5c">
									{{ getUserEmail }}
								</div>
							</div>
							<div class="col-auto mt-2">
								<button
									v-if="isCustomerBlacklisted"
									type="button"
									class="button-success d-flex text-white align-items-center"
									@click="unBlackListCustomerHandle"
								>
									<span class="mb-1">
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											class="mr-2"
										>
											<path
												d="M3.08333 4.83318H10.6667C10.8214 4.83318 10.9697 4.89464 11.0791 5.00404C11.1885 5.11343 11.25 5.26181 11.25 5.41652V11.2498C11.25 11.4046 11.1885 11.5529 11.0791 11.6623C10.9697 11.7717 10.8214 11.8332 10.6667 11.8332H1.33333C1.17862 11.8332 1.03025 11.7717 0.920854 11.6623C0.811458 11.5529 0.75 11.4046 0.75 11.2498V5.41652C0.75 5.26181 0.811458 5.11343 0.920854 5.00404C1.03025 4.89464 1.17862 4.83318 1.33333 4.83318H1.91667V4.24985C1.91633 3.32976 2.22676 2.43652 2.79761 1.71494C3.36847 0.993348 4.16629 0.485704 5.06177 0.274294C5.95724 0.0628834 6.89787 0.160098 7.73117 0.550181C8.56448 0.940263 9.24162 1.60035 9.65283 2.42343L8.60925 2.94493C8.31554 2.35694 7.83184 1.88539 7.23657 1.60673C6.64129 1.32808 5.96935 1.25865 5.32968 1.4097C4.69001 1.56076 4.12011 1.92344 3.71238 2.43895C3.30464 2.95447 3.08298 3.59258 3.08333 4.24985V4.83318ZM4.83333 7.74985V8.91652H7.16667V7.74985H4.83333Z"
												fill="white"
											/>
										</svg>
									</span>
									Unblock Customer
								</button>
								<button
									v-else
									type="button"
									class="button-danger d-flex text-white align-items-center"
									@click="blackListCustomerHandle"
								>
									<span class="mb-1">
										<svg
											width="17"
											height="17"
											viewBox="0 0 14 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											class="mr-2"
										>
											<path
												d="M11.9515 2.0475C10.9718 1.06931 9.72408 0.403402 8.36591 0.133937C7.00775 -0.135528 5.60015 0.00354951 4.32104 0.533591C3.04193 1.06363 1.94873 1.96084 1.17962 3.11182C0.410501 4.26279 0 5.61586 0 7C0 8.38414 0.410501 9.73721 1.17962 10.8882C1.94873 12.0392 3.04193 12.9364 4.32104 13.4664C5.60015 13.9965 7.00775 14.1355 8.36591 13.8661C9.72408 13.5966 10.9718 12.9307 11.9515 11.9525C13.2633 10.6379 14 8.85683 14 7C14 5.14317 13.2633 3.36213 11.9515 2.0475ZM3.61995 3.62409C4.37782 2.86638 5.3687 2.38563 6.43309 2.25923C7.49749 2.13284 8.57347 2.36814 9.48783 2.92727L2.92764 9.49932C2.36668 8.58443 2.12993 7.5075 2.25551 6.44181C2.38108 5.37611 2.86168 4.38364 3.61995 3.62409ZM10.3743 10.3759C9.61644 11.1336 8.62555 11.6144 7.56115 11.7408C6.49676 11.8672 5.42078 11.6319 4.50642 11.0727L11.0666 4.50068C11.6276 5.41557 11.8643 6.4925 11.7387 7.55819C11.6132 8.62389 11.1326 9.61636 10.3743 10.3759Z"
												fill="white"
											/>
										</svg>
									</span>
									Blacklist {{ getUserFirstname }}
									{{ getUserLastname }}
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-body">
						<div class="mx-auto container">
							<div class="row row-sm align-items-center">
								<div class="col">
									<h4 class="card-title m-0">
										<span class="label-text" style="color: #5c5c5c">Amount</span>
									</h4>
									<div>
										<h1>
											<span
												class="label-text font-weight-bold"
												style="color: black; font-size: 24px; line-height: 33px"
												>{{
													getTransaction.amount | formatCurrency(getTransaction.currency)
												}}</span
											>
											<span
												class="badge m-0 align-middle ml-2 rounded-full"
												:class="getTransaction.status === 'new' ? 'bg-warning' : 'bg-success'"
											>
												{{ getTransaction.status }}
											</span>
										</h1>
									</div>
								</div>
							</div>
							<hr class="m-0" />
							<div class="row row-sm align-items-center pt-4">
								<div class="col">
									<h4 class="card-title m-0">
										<span
											class="label-text"
											style="color: #5c5c5c; font-size: 14px; line-height: 19px"
											>Reference</span
										>
									</h4>
									<div>
										<h3 class="label-text font-weight-bold">
											{{ getTransaction.reference }}
											<span @click="copyToClipboard(getTransaction.reference)">
												<svg
													width="13"
													height="13"
													viewBox="0 0 13 13"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													class="ml-2 mb-2 cursor-pointer"
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
									<h4 class="card-title m-0">
										<span
											class="label-text"
											style="color: #5c5c5c; font-size: 14px; line-height: 19px"
											>Merchant Payout Amount</span
										>
									</h4>
									<div>
										<h3 class="label-text font-weight-bold">
											{{
												getTransaction.merchant_payout_amount
													| formatCurrency(getTransaction.currency)
											}}
										</h3>
									</div>
								</div>
								<div class="col">
									<h4 class="card-title m-0">
										<span
											class="label-text"
											style="color: #5c5c5c; font-size: 14px; line-height: 19px"
											>Paid At</span
										>
									</h4>
									<div>
										<h3 class="label-text font-weight-bold">
											{{ getTransaction.created_at | date }}
										</h3>
									</div>
								</div>
							</div>
							<hr class="m-0" />
							<div class="row row-sm align-items-center pt-4">
								<div class="col">
									<h4 class="card-title m-0">
										<span
											class="label-text"
											style="color: #5c5c5c; font-size: 14px; line-height: 19px"
											>Interest</span
										>
									</h4>
									<div>
										<h3 class="label-text font-weight-bold">{{ getTransaction.interest }}%</h3>
									</div>
								</div>
								<div class="col">
									<h4 class="card-title m-0">
										<span
											class="label-text"
											style="color: #5c5c5c; font-size: 14px; line-height: 19px"
											>Commission</span
										>
									</h4>
									<div>
										<h3 class="label-text font-weight-bold">
											{{ getTransaction.commission | formatCurrency(getTransaction.currency) }}
										</h3>
									</div>
								</div>
								<div class="col">
									<h4 class="card-title m-0">
										<span
											class="label-text"
											style="color: #5c5c5c; font-size: 14px; line-height: 19px"
											>Repayment Cycle</span
										>
									</h4>
									<div>
										<h3 class="label-text font-weight-bold">
											{{ getTransaction.repayment_cycle }}
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="mx-auto container">
						<div class="card-body">
							<ul class="nav nav-tabs" data-toggle="tabs">
								<li class="mb-2 mr-2">
									<a
										href="#tabs-home-ex1"
										class="form-selectgroup-label"
										:class="[
											tab ? 'tab-selected border-0 px-3' : 'border-0 tab-not-selected label-text'
										]"
										data-toggle="tab"
										@click="tab = !tab"
										>Items</a
									>
								</li>
								<li class="">
									<a
										href="#tabs-profile-ex1"
										class="form-selectgroup-label"
										:class="[
											tab ? 'border-0 tab-not-selected label-text' : 'tab-selected border-0 px-3'
										]"
										data-toggle="tab"
										@click="tab = !tab"
										>Analytics</a
									>
								</li>
							</ul>
							<div class="tab-content pt-4">
								<div id="tabs-home-ex1" class="tab-pane active show">
									<div class="row row-sm align-items-center">
										<div
											v-for="item in getTransaction.items"
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
														{{ item.unit_price | formatCurrency(getTransaction.currency) }}
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
											<div class="label-text-list">Card Type</div>
											<h4 class="card-title m-0">
												<span class="label-text" style="color: black">Mastercard Debit</span>
											</h4>
										</div>
										<div class="col">
											<div class="label-text-list">Card Number</div>
											<h4 class="card-title m-0">
												<span class="label-text" style="color: black">539939 **** 8378</span>
											</h4>
										</div>
										<div class="col">
											<div class="label-text-list">Authorization</div>
											<h4 class="card-title m-0">
												<span class="label-text" style="color: black">AUTH_79w03zv6c5</span>
											</h4>
										</div>
										<div class="col">
											<div class="label-text-list">Bank and Country</div>
											<h4 class="card-title m-0">
												<span class="label-text" style="color: black"
													>Guaranty Trust Bank (Nigeria)</span
												>
											</h4>
										</div>
									</div>
									<hr class="mt-4" />
									<div class="row row-sm align-items-center mb-4">
										<div class="col">
											<div class="label-text-list">IP Address</div>
											<h4 class="card-title m-0">
												<span class="label-text text-black">41.23.42.838</span>
											</h4>
										</div>
										<div class="col">
											<button class="button-primary text-white">
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
				<MetaDataTable v-if="transactionMetaData.length > 0" :meta-data="transactionMetaData" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MetaDataTable from './MetaDataTable';
import copy from 'copy-to-clipboard';

export default {
	name: 'TransactionDetails',
	components: {
		MetaDataTable
	},
	filters: {
		date(val) {
			return moment(val).format('llll');
		}
	},
	data() {
		return {
			tab: true,
			isCopied: false
		};
	},
	computed: {
		...mapGetters(['getTransaction', 'getLoggedUser']),
		getUserInitials() {
			const firstNameInitial =
				this.getTransaction && this.getTransaction.customer && this.getTransaction.customer.firstname
					? this.getTransaction.customer.firstname.charAt(0)
					: '';
			const lastNameInitial =
				this.getTransaction && this.getTransaction.customer && this.getTransaction.customer.lastname
					? this.getTransaction.customer.lastname.charAt(0)
					: '';
			return `${firstNameInitial}${lastNameInitial}`;
		},
		isCustomerBlacklisted() {
			if (this.getTransaction.customer && this.getTransaction.customer.blacklist) {
				return this.getTransaction.customer.blacklist.some(
					(customer) => customer.merchant_id === this.getTransaction.merchant_id
				);
			} else {
				return false;
			}
		},
		getUserFirstname() {
			return this.getTransaction && this.getTransaction.customer ? this.getTransaction.customer.firstname : '';
		},
		getUserLastname() {
			return this.getTransaction && this.getTransaction.customer ? this.getTransaction.customer.lastname : '';
		},
		getUserEmail() {
			return this.getTransaction && this.getTransaction.customer ? this.getTransaction.customer.email : '';
		},
		transactionMetaData() {
			if (this.getTransaction.meta_data !== null) {
				return Object.entries(this.getTransaction.meta_data);
			} else {
				return [];
			}
		}
	},
	methods: {
		...mapActions(['blackListCustomer', 'unBlackListCustomer']),
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
		blackListCustomerHandle() {
			this.blackListCustomer({
				user_id: this.getTransaction.customer.id,
				id: this.getTransaction.merchant_id,
				transactionId: this.getTransaction.id,
				isCalledFrom: 'transactionDetails'
			});
		},
		unBlackListCustomerHandle() {
			this.unBlackListCustomer({
				customerId: this.getTransaction.customer.id,
				merchantId: this.getTransaction.merchant_id,
				transactionId: this.getTransaction.id,
				isCalledFrom: 'transactionDetails'
			});
		}
	}
};
</script>
