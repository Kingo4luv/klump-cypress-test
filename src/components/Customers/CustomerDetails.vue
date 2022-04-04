<template>
	<div class="card">
		<div class="card-body">
			<div class="row row-sm align-items-center mx-auto">
				<div class="col-auto">
					<span>
						<span id="userInitials" class="avatar avatar-lg mr-2 text-white bg-primary">{{
							getUserInitials
						}}</span>
					</span>
				</div>
				<div class="col">
					<h4 class="card-title m-0">
						<a id="userName" href="#" class="label-text text-black font-weight-bold">
							{{ getUserFirstName }} {{ getUserLastName }}
						</a>
					</h4>
					<div id="userDate" class="label-text" style="line-height: 19px; font-size: 14px; color: #5c5c5c">
						Added on {{ getMerchantCustomer.created_at | date }}
					</div>
				</div>
				<div class="col-auto">
					<button
						v-if="isCustomerBlacklisted"
						id="blackListCustomer"
						type="button"
						class="button-danger text-white d-inline-flex align-items-center"
						@click="unBlackListCustomerHandle"
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
						Blacklist customer
					</button>
					<button
						v-else
						id="unblockCustomer"
						type="button"
						class="button-success text-white d-inline-flex align-items-center"
						@click="blackListCustomerHandle"
					>
						<span class="mb-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								class="mr-2"
							>
								<path
									d="M3.08333 4.83318H10.6667C10.8214 4.83318 10.9697 4.89464 11.0791 5.00404C11.1885 5.11343 11.25 5.26181 11.25 5.41652V11.2498C11.25 11.4046 11.1885 11.5529 11.0791 11.6623C10.9697 11.7717 10.8214 11.8332 10.6667 11.8332H1.33333C1.17862 11.8332 1.03025 11.7717 0.920854 11.6623C0.811458 11.5529 0.75 11.4046 0.75 11.2498V5.41652C0.75 5.26181 0.811458 5.11343 0.920854 5.00404C1.03025 4.89464 1.17862 4.83318 1.33333 4.83318H1.91667V4.24985C1.91633 3.32976 2.22676 2.43652 2.79761 1.71494C3.36847 0.993348 4.16629 0.485704 5.06177 0.274294C5.95724 0.0628834 6.89787 0.160098 7.73117 0.550181C8.56448 0.940263 9.24162 1.60035 9.65283 2.42343L8.60925 2.94493C8.31554 2.35694 7.83184 1.88539 7.23657 1.60673C6.64129 1.32808 5.96935 1.25865 5.32968 1.4097C4.69001 1.56076 4.12011 1.92344 3.71238 2.43895C3.30464 2.95447 3.08298 3.59258 3.08333 4.24985V4.83318ZM4.83333 7.74985V8.91652H7.16667V7.74985H4.83333Z"
									fill="white"
								/>
							</svg>
						</span>
						Unblock customer
					</button>
				</div>
			</div>
			<hr class="my-4 mx-3" />
			<div class="row row-sm align-items-center container mx-auto">
				<div class="col">
					<h4 class="card-title mb-2 text-muted font-weight-semibold">
						<span class="label-text" style="color: #5c5c5c; font-size: 14px; line-height: 19px">Email</span>
					</h4>
					<div>
						<h3 id="userEmail" class="label-text font-weight-bold" style="font-weight: 500; color: black">
							{{ getUserEmail }}
							<span @click="copyToClipboard(getUserEmail)">
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
					<h4 class="card-title mb-2 text-muted font-weight-semibold">
						<span
							class="label-text font-weight-bold"
							style="color: #5c5c5c; font-size: 14px; line-height: 19px"
							>Total Transaction Value</span
						>
					</h4>
					<div>
						<h3 class="label-text font-weight-bold" style="font-weight: 500; color: black">
							{{ getMerchantCustomer.amount | formatCurrency(getMerchantCustomer.currency) }}
						</h3>
					</div>
				</div>
				<div class="col">
					<h4 class="card-title mb-2 text-muted font-weight-semibold">
						<span
							class="label-text font-weight-bold"
							style="color: #5c5c5c; font-size: 14px; line-height: 19px"
							>Customer Since</span
						>
					</h4>
					<div>
						<h3 class="label-text font-weight-bold" style="font-weight: 500; color: black">
							{{ getMerchantCustomer.created_at | date }}
						</h3>
					</div>
				</div>
				<div class="col">
					<h4 class="card-title mb-2 text-muted font-weight-semibold">
						<span class="label-text" style="color: #5c5c5c; font-size: 14px; line-height: 19px"
							>Phone Number</span
						>
					</h4>
					<div>
						<h3 id="userPhone" class="label-text font-weight-bold" style="font-weight: 500; color: black">
							{{ getUserPhone }}
							<span @click="copyToClipboard(getUserPhone)">
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
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import copy from 'copy-to-clipboard';

export default {
	name: 'CustomerDetails',
	filters: {
		date(val) {
			return moment(val).format('llll');
		}
	},
	data() {
		return {
			isCopied: false
		};
	},
	computed: {
		...mapGetters(['getMerchantCustomer', 'getLoggedUser']),
		getUserInitials() {
			const firstNameInitial =
				this.getMerchantCustomer &&
				this.getMerchantCustomer.customer &&
				this.getMerchantCustomer.customer.firstname
					? this.getMerchantCustomer.customer.firstname.charAt(0)
					: '';
			const lastNameInitial =
				this.getMerchantCustomer &&
				this.getMerchantCustomer.customer &&
				this.getMerchantCustomer.customer.lastname
					? this.getMerchantCustomer.customer.lastname.charAt(0)
					: '';
			return `${firstNameInitial}${lastNameInitial}`;
		},
		getUserFirstName() {
			return this.getMerchantCustomer &&
				this.getMerchantCustomer.customer &&
				this.getMerchantCustomer.customer.firstname
				? this.getMerchantCustomer.customer.firstname
				: '';
		},
		getUserLastName() {
			return this.getMerchantCustomer &&
				this.getMerchantCustomer.customer &&
				this.getMerchantCustomer.customer.lastname
				? this.getMerchantCustomer.customer.lastname
				: '';
		},
		getUserEmail() {
			return this.getMerchantCustomer &&
				this.getMerchantCustomer.customer &&
				this.getMerchantCustomer.customer.email
				? this.getMerchantCustomer.customer.email
				: '';
		},
		getUserPhone() {
			return this.getMerchantCustomer &&
				this.getMerchantCustomer.customer &&
				this.getMerchantCustomer.customer.phone
				? this.getMerchantCustomer.customer.phone
				: '';
		},
		isCustomerBlacklisted() {
			if (
				this.getMerchantCustomer &&
				this.getMerchantCustomer.customer &&
				this.getMerchantCustomer.customer.blacklist &&
				this.getMerchantCustomer.customer.blacklist.length > 0
			) {
				return this.getMerchantCustomer.customer.blacklist.length > 0;
			} else {
				return false;
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
				user_id: this.getMerchantCustomer.customer.id,
				id: this.getMerchantCustomer.merchant_id,
				transactionId: this.getMerchantCustomer.id,
				isCalledFrom: 'customerDetails'
			});
		},
		unBlackListCustomerHandle() {
			this.unBlackListCustomer({
				customerId: this.getMerchantCustomer.customer.id,
				merchantId: this.getMerchantCustomer.merchant_id,
				transactionId: this.getMerchantCustomer.id,
				isCalledFrom: 'customerDetails'
			});
		},
		editDetails() {
			this.$emit('open-edit-details', true);
		}
	}
};
</script>
