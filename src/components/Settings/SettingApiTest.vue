<template>
	<div class="content p-0 m-0" style="margin-top: -10px">
		<div class="container-xl">
			<div class="card">
				<div class="card-body p-4 m-0">
					<div class="row row-sm">
						<div class="col">
							<p
								class="label-text mb-2 text-capitalize"
								style="color: #5c5c5c; font-size: 14px; line-height: 19px"
							>
								{{ merchantDetails.environment }} Secret Key
							</p>
							<h4 class="card-title m-0 align-items-center">
								<span class="label-text text-black font-weight-bold mr-1">
									{{
										hideSecretKey
											? '*************************************************'
											: merchantDetails.secret_key
									}}
								</span>
								<span class="icon">
									<svg
										v-if="hideSecretKey"
										width="18"
										height="15"
										viewBox="0 0 15 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="mb-1 cursor-pointer"
										@click="hideSecretKey = !hideSecretKey"
									>
										<path
											d="M7.50016 0.875C10.8702 0.875 13.6739 3.3 14.262 6.5C13.6745 9.7 10.8702 12.125 7.50016 12.125C4.13016 12.125 1.32641 9.7 0.738281 6.5C1.32578 3.3 4.13016 0.875 7.50016 0.875ZM7.50016 10.875C8.77482 10.8747 10.0116 10.4418 11.0082 9.64698C12.0047 8.8522 12.702 7.74267 12.9858 6.5C12.7009 5.25832 12.0032 4.15 11.0068 3.35627C10.0104 2.56253 8.7741 2.13033 7.50016 2.13033C6.22622 2.13033 4.98996 2.56253 3.99352 3.35627C2.99707 4.15 2.29939 5.25832 2.01453 6.5C2.29834 7.74267 2.99558 8.8522 3.99212 9.64698C4.98867 10.4418 6.22549 10.8747 7.50016 10.875ZM7.50016 9.3125C6.75424 9.3125 6.03887 9.01618 5.51142 8.48874C4.98397 7.96129 4.68766 7.24592 4.68766 6.5C4.68766 5.75408 4.98397 5.03871 5.51142 4.51126C6.03887 3.98382 6.75424 3.6875 7.50016 3.6875C8.24608 3.6875 8.96145 3.98382 9.48889 4.51126C10.0163 5.03871 10.3127 5.75408 10.3127 6.5C10.3127 7.24592 10.0163 7.96129 9.48889 8.48874C8.96145 9.01618 8.24608 9.3125 7.50016 9.3125ZM7.50016 8.0625C7.91456 8.0625 8.31199 7.89788 8.60501 7.60485C8.89804 7.31183 9.06266 6.9144 9.06266 6.5C9.06266 6.0856 8.89804 5.68817 8.60501 5.39515C8.31199 5.10212 7.91456 4.9375 7.50016 4.9375C7.08576 4.9375 6.68833 5.10212 6.3953 5.39515C6.10228 5.68817 5.93766 6.0856 5.93766 6.5C5.93766 6.9144 6.10228 7.31183 6.3953 7.60485C6.68833 7.89788 7.08576 8.0625 7.50016 8.0625Z"
											fill="#5C5C5C"
										/>
									</svg>
								</span>
								<span class="icon">
									<svg
										v-if="!hideSecretKey"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="20"
										height="16"
										class="mb-1 cursor-pointer"
										@click="hideSecretKey = !hideSecretKey"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path
											d="M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z"
										/>
									</svg>
								</span>
								<span class="icon ml-1" @click="copyToClipboard(merchantDetails.secret_key)"
									><svg
										width="13"
										height="13"
										viewBox="0 0 13 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="cursor-pointer"
									>
										<path
											d="M3.375 2.75V0.875C3.375 0.70924 3.44085 0.550269 3.55806 0.433058C3.67527 0.315848 3.83424 0.25 4 0.25H11.5C11.6658 0.25 11.8247 0.315848 11.9419 0.433058C12.0592 0.550269 12.125 0.70924 12.125 0.875V9.625C12.125 9.79076 12.0592 9.94973 11.9419 10.0669C11.8247 10.1842 11.6658 10.25 11.5 10.25H9.625V12.125C9.625 12.47 9.34375 12.75 8.99562 12.75H1.50437C1.42195 12.7505 1.34025 12.7347 1.26395 12.7035C1.18765 12.6723 1.11827 12.6264 1.05979 12.5683C1.0013 12.5102 0.954871 12.4412 0.923159 12.3651C0.891447 12.289 0.875081 12.2074 0.875 12.125L0.876875 3.375C0.876875 3.03 1.15813 2.75 1.50625 2.75H3.375ZM2.12687 4L2.125 11.5H8.375V4H2.12687ZM4.625 2.75H9.625V9H10.875V1.5H4.625V2.75Z"
											:fill="isCopied ? '#45d624' : '#5C5C5C'"
										/>
									</svg>
								</span>
							</h4>
							<p
								class="font-weight-bold mb-2"
								:class="isNewKeyGenerated ? 'text-success' : 'text-primary'"
								style="cursor: pointer"
								@click="handleGenerateNewMerchantKey"
							>
								<u @click="handleGenerateNewMerchantKey"> Generate new key </u>
							</p>
						</div>
						<div class="col">
							<p
								class="label-text mb-2 text-capitalize"
								style="color: #5c5c5c; font-size: 14px; line-height: 19px"
							>
								{{ merchantDetails.environment }} Public Key
							</p>
							<h4 class="card-title m-0 font-weight-bold align-items-center">
								<span class="label-text text-black font-weight-bold">
									{{
										hidePublicKey
											? '*************************************************'
											: merchantDetails.public_key
									}}
								</span>
								<span class="icon">
									<svg
										v-if="hidePublicKey"
										width="18"
										height="15"
										viewBox="0 0 15 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="mb-1 cursor-pointer"
										@click="hidePublicKey = !hidePublicKey"
									>
										<path
											d="M7.50016 0.875C10.8702 0.875 13.6739 3.3 14.262 6.5C13.6745 9.7 10.8702 12.125 7.50016 12.125C4.13016 12.125 1.32641 9.7 0.738281 6.5C1.32578 3.3 4.13016 0.875 7.50016 0.875ZM7.50016 10.875C8.77482 10.8747 10.0116 10.4418 11.0082 9.64698C12.0047 8.8522 12.702 7.74267 12.9858 6.5C12.7009 5.25832 12.0032 4.15 11.0068 3.35627C10.0104 2.56253 8.7741 2.13033 7.50016 2.13033C6.22622 2.13033 4.98996 2.56253 3.99352 3.35627C2.99707 4.15 2.29939 5.25832 2.01453 6.5C2.29834 7.74267 2.99558 8.8522 3.99212 9.64698C4.98867 10.4418 6.22549 10.8747 7.50016 10.875ZM7.50016 9.3125C6.75424 9.3125 6.03887 9.01618 5.51142 8.48874C4.98397 7.96129 4.68766 7.24592 4.68766 6.5C4.68766 5.75408 4.98397 5.03871 5.51142 4.51126C6.03887 3.98382 6.75424 3.6875 7.50016 3.6875C8.24608 3.6875 8.96145 3.98382 9.48889 4.51126C10.0163 5.03871 10.3127 5.75408 10.3127 6.5C10.3127 7.24592 10.0163 7.96129 9.48889 8.48874C8.96145 9.01618 8.24608 9.3125 7.50016 9.3125ZM7.50016 8.0625C7.91456 8.0625 8.31199 7.89788 8.60501 7.60485C8.89804 7.31183 9.06266 6.9144 9.06266 6.5C9.06266 6.0856 8.89804 5.68817 8.60501 5.39515C8.31199 5.10212 7.91456 4.9375 7.50016 4.9375C7.08576 4.9375 6.68833 5.10212 6.3953 5.39515C6.10228 5.68817 5.93766 6.0856 5.93766 6.5C5.93766 6.9144 6.10228 7.31183 6.3953 7.60485C6.68833 7.89788 7.08576 8.0625 7.50016 8.0625Z"
											fill="#5C5C5C"
										/>
									</svg>
								</span>
								<span class="icon">
									<svg
										v-if="!hidePublicKey"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="20"
										height="16"
										class="mb-1 cursor-pointer"
										@click="hidePublicKey = !hidePublicKey"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path
											d="M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z"
										/>
									</svg>
								</span>
								<span class="icon ml-1" @click="copyToClipboard(merchantDetails.public_key)"
									><svg
										width="13"
										height="13"
										viewBox="0 0 13 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="cursor-pointer"
									>
										<path
											d="M3.375 2.75V0.875C3.375 0.70924 3.44085 0.550269 3.55806 0.433058C3.67527 0.315848 3.83424 0.25 4 0.25H11.5C11.6658 0.25 11.8247 0.315848 11.9419 0.433058C12.0592 0.550269 12.125 0.70924 12.125 0.875V9.625C12.125 9.79076 12.0592 9.94973 11.9419 10.0669C11.8247 10.1842 11.6658 10.25 11.5 10.25H9.625V12.125C9.625 12.47 9.34375 12.75 8.99562 12.75H1.50437C1.42195 12.7505 1.34025 12.7347 1.26395 12.7035C1.18765 12.6723 1.11827 12.6264 1.05979 12.5683C1.0013 12.5102 0.954871 12.4412 0.923159 12.3651C0.891447 12.289 0.875081 12.2074 0.875 12.125L0.876875 3.375C0.876875 3.03 1.15813 2.75 1.50625 2.75H3.375ZM2.12687 4L2.125 11.5H8.375V4H2.12687ZM4.625 2.75H9.625V9H10.875V1.5H4.625V2.75Z"
											:fill="isCopied ? '#45d624' : '#5C5C5C'"
										/>
									</svg>
								</span>
							</h4>
						</div>
						<div class="col-auto d-flex justify-content-end align-items-center">
							<button type="button" class="button-danger text-white align-items-center mr-3">
								<span class="mb-1 mr-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											d="M11.9515 2.0475C10.9718 1.06931 9.72408 0.403402 8.36591 0.133937C7.00775 -0.135528 5.60015 0.00354951 4.32104 0.533591C3.04193 1.06363 1.94873 1.96084 1.17962 3.11182C0.410501 4.26279 0 5.61586 0 7C0 8.38414 0.410501 9.73721 1.17962 10.8882C1.94873 12.0392 3.04193 12.9364 4.32104 13.4664C5.60015 13.9965 7.00775 14.1355 8.36591 13.8661C9.72408 13.5966 10.9718 12.9307 11.9515 11.9525C13.2633 10.6379 14 8.85683 14 7C14 5.14317 13.2633 3.36213 11.9515 2.0475ZM3.61995 3.62409C4.37782 2.86638 5.3687 2.38563 6.43309 2.25923C7.49749 2.13284 8.57347 2.36814 9.48783 2.92727L2.92764 9.49932C2.36668 8.58443 2.12993 7.5075 2.25551 6.44181C2.38108 5.37611 2.86168 4.38364 3.61995 3.62409ZM10.3743 10.3759C9.61644 11.1336 8.62555 11.6144 7.56115 11.7408C6.49676 11.8672 5.42078 11.6319 4.50642 11.0727L11.0666 4.50068C11.6276 5.41557 11.8643 6.4925 11.7387 7.55819C11.6132 8.62389 11.1326 9.61636 10.3743 10.3759Z"
											fill="white"
										/>
									</svg>
								</span>
								Disable API
							</button>
						</div>
					</div>

					<hr class="mt-4" />
					<div class="row row-sm align-items-center">
						<div class="col">
							<p class="label-text mb-2" style="color: #5c5c5c; font-size: 14px; line-height: 19px">
								Test Webhook URL
							</p>
							<h4 v-if="!isEdited" class="card-title m-0 font-weight-bold align-items-center">
								<span class="label-text text-black font-weight-bold">{{ webhook.url }}</span>
								<span class="icon ml-1">
									<svg
										width="13"
										height="13"
										viewBox="0 0 13 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="cursor-pointer"
									>
										<path
											d="M3.375 2.75V0.875C3.375 0.70924 3.44085 0.550269 3.55806 0.433058C3.67527 0.315848 3.83424 0.25 4 0.25H11.5C11.6658 0.25 11.8247 0.315848 11.9419 0.433058C12.0592 0.550269 12.125 0.70924 12.125 0.875V9.625C12.125 9.79076 12.0592 9.94973 11.9419 10.0669C11.8247 10.1842 11.6658 10.25 11.5 10.25H9.625V12.125C9.625 12.47 9.34375 12.75 8.99562 12.75H1.50437C1.42195 12.7505 1.34025 12.7347 1.26395 12.7035C1.18765 12.6723 1.11827 12.6264 1.05979 12.5683C1.0013 12.5102 0.954871 12.4412 0.923159 12.3651C0.891447 12.289 0.875081 12.2074 0.875 12.125L0.876875 3.375C0.876875 3.03 1.15813 2.75 1.50625 2.75H3.375ZM2.12687 4L2.125 11.5H8.375V4H2.12687ZM4.625 2.75H9.625V9H10.875V1.5H4.625V2.75Z"
											fill="#5C5C5C"
										/>
									</svg>
								</span>
							</h4>
							<h4 v-else class="card-title m-0 font-weight-bold align-items-center">
								<input
									v-model="webhook.url"
									type="text"
									class="form-control font-weight-bold w-50"
									placeholder="https://www.klump.com/merchants/test"
								/>
							</h4>
						</div>
						<div class="col-auto">
							<button
								type="button"
								class="btn btn-primary align-items-center mr-3"
								:disabled="!isValidUrl && createWebhookButtonIsClicked"
								:class="!isValidUrl && createWebhookButtonIsClicked ? 'btn-danger' : ''"
								@click="handleCreateWebhook('test')"
							>
								<span class="mb-1 mr-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
									>
										<path
											d="M3.22508 9.49989H0.75V7.0248L7.42042 0.354386C7.52981 0.245028 7.67815 0.183594 7.83283 0.183594C7.98751 0.183594 8.13586 0.245028 8.24525 0.354386L9.8955 2.00464C10.0049 2.11403 10.0663 2.26237 10.0663 2.41705C10.0663 2.57173 10.0049 2.72008 9.8955 2.82947L3.22508 9.49989ZM0.75 10.6666H11.25V11.8332H0.75V10.6666Z"
											fill="white"
										/>
									</svg>
								</span>
								{{ !isEdited ? 'Edit Details' : 'Save Changes' }}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import settingApiMixin from '../../mixins/settingApiMixin';

export default {
	name: 'SettingApiTest',
	mixins: [settingApiMixin],
	props: {
		merchantDetails: {
			type: Object,
			default: () => ({}),
			required: true
		},
		webhook: {
			type: Object,
			default: () => ({}),
			required: true
		}
	},
	data() {
		return {
			isNewKeyGenerated: false,
			isNewKeyGeneratedClicked: false,
			hidePublicKey: true
		};
	},
	computed: {
		...mapGetters(['getLoggedUser', 'getStatus'])
	},
	watch: {
		getStatus(val) {
			if (val === 'success' && this.isNewKeyGeneratedClicked) {
				this.isNewKeyGenerated = true;
				this.isNewKeyGeneratedClicked = false;
			}
		}
	},
	methods: {
		...mapActions(['generateNewKey']),
		handleGenerateNewMerchantKey() {
			this.isNewKeyGenerated = true;
			this.generateNewKey({ id: this.getLoggedUser.id, environment: this.merchantDetails.environment });
		}
	}
};
</script>
<style scoped>
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
</style>
