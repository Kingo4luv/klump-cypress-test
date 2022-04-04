<template>
	<div
		id="modal-report"
		class="modal fade"
		tabindex="-1"
		role="dialog"
		aria-hidden="true"
		style="background-color: rgba(0, 0, 0, 0.4)"
	>
		<alert v-if="getAlert.message != ''" />
		<div class="modal-dialog" role="document">
			<div style="position: relative; pointer-events: auto">
				<div class="d-flex flex-column">
					<div class="bg-white border-container container-box-shadow rounded my-3" style="padding: 40px 35px">
						<span
							class="d-flex justify-content-center font-weight-bold"
							style="line-height: 22px; font-size: 16px; margin-bottom: 38px"
						>
							New Payment Page
						</span>
						<ValidationObserver v-slot="{ invalid }">
							<form ref="form" method="post" @submit.prevent="createPaymentPage">
								<div class="mb-4">
									<ValidationProvider v-slot="{ errors }" rules="required" tag="div">
										<klump-input
											:id="`page-name`"
											v-model="pageName"
											:type="`text`"
											:placeholder="`Page name`"
											:errors="errors"
										>
											Page Name <span class="text-danger">*</span>
										</klump-input>
									</ValidationProvider>
								</div>
								<div class="mb-4">
									<ValidationProvider v-slot="{ errors }" rules="required" tag="div">
										<klump-input
											:id="`first-name`"
											v-model="description"
											:type="`textarea`"
											:placeholder="`Page descriptions or extra instructions`"
											:errors="errors"
										>
											Description
										</klump-input>
									</ValidationProvider>
								</div>
								<div class="mb-6">
									<ValidationProvider v-slot="{ errors }" rules="required" tag="div">
										<label for="" class="font-weight-bold block mb-1" style="font-size: 16px">
											SEO Images
										</label>
										<p style="font-size: 14px; line-height: 19px; color: #353535; opacity: 0.5">
											This image will show when the page is shared on social media. We recommend a
											1024 x 512 JPG or PNG, under 1MB in size.
										</p>
										<div
											class="d-flex justify-content-center py-2"
											style="
												border: 0.578659px dashed #e0e0e0;
												border-radius: 2px;
												position: relative;
												z-index: 10;
											"
										>
											<div class="d-flex align-items-center">
												<svg
													v-if="fileName === ''"
													class="mr-1"
													style="transform: translate(0px, -2px)"
													xmlns="http://www.w3.org/2000/svg"
													width="9"
													height="9"
													viewBox="0 0 9 9"
													fill="none"
												>
													<path
														d="M5.21053 0.710526C5.21053 0.522083 5.13567 0.341358 5.00242 0.208108C4.86917 0.0748588 4.68844 0 4.5 0C4.31156 0 4.13083 0.0748588 3.99758 0.208108C3.86433 0.341358 3.78947 0.522083 3.78947 0.710526V3.78947H0.710526C0.522083 3.78947 0.341358 3.86433 0.208108 3.99758C0.0748588 4.13083 0 4.31156 0 4.5C0 4.68844 0.0748588 4.86917 0.208108 5.00242C0.341358 5.13567 0.522083 5.21053 0.710526 5.21053H3.78947V8.28947C3.78947 8.47792 3.86433 8.65864 3.99758 8.79189C4.13083 8.92514 4.31156 9 4.5 9C4.68844 9 4.86917 8.92514 5.00242 8.79189C5.13567 8.65864 5.21053 8.47792 5.21053 8.28947V5.21053H8.28947C8.47792 5.21053 8.65864 5.13567 8.79189 5.00242C8.92514 4.86917 9 4.68844 9 4.5C9 4.31156 8.92514 4.13083 8.79189 3.99758C8.65864 3.86433 8.47792 3.78947 8.28947 3.78947H5.21053V0.710526Z"
														fill="#9A9A9A"
													/>
												</svg>
												<span
													v-if="fileName === ''"
													style="
														color: #353535;
														opacity: 0.5;
														font-size: 16px;
														display: block;
													"
													>Choose File</span
												>
												<span v-else>{{ fileName }}</span>
											</div>
											<input
												id=""
												ref="image"
												type="file"
												name=""
												class="w-100"
												style="position: absolute; top: 0px; bottom: 0px; opacity: 0"
												@change="uploadImage"
											/>
										</div>
										<span v-if="errors.length > 0 || fileError !== null">{{ fileError }}</span>
									</ValidationProvider>
								</div>
								<div class="form-group">
									<div class="flex flex-col space-y-4">
										<div class="flex radio-container position-relative mb-2">
											<input
												id="fixed-payment"
												v-model="fixedPayment"
												type="radio"
												value="Fixed Payment"
												class="block transform translate-y-neg1"
												:checked="fixedPayment === 'Fixed Payment'"
											/>
											<span class="checkmark" @click="fixedPayment = 'Fixed Payment'" />
											<label
												for="fixed-payment"
												class="block text-radio-label"
												style="
													font-weight: 500;
													font-size: 18px;
													line-height: 25px;
													color: #353535;
													position: relative;
													left: 25px;
												"
												>I want a fixed payment amount on this page</label
											>
										</div>
										<div class="flex radio-container position-relative">
											<input
												id="collect-phone"
												v-model="collectPhoneNumber"
												type="radio"
												value="Collect Phone Number"
												class="block transform translate-y-neg1"
												:checked="collectPhoneNumber === 'Collect Phone Number'"
											/>
											<span
												class="checkmark"
												@click="collectPhoneNumber = 'Collect Phone Number'"
											/>
											<label
												for="collect-phone"
												class="block text-radio-label"
												style="
													font-weight: 500;
													font-size: 18px;
													line-height: 25px;
													color: #353535;
													position: relative;
													left: 25px;
												"
											>
												Collect phone number on this page
											</label>
										</div>
									</div>
								</div>
								<div v-if="fixedPayment" class="mb-4">
									<ValidationProvider v-slot="{ errors }" rules="required" tag="div">
										<klump-input
											:id="`amount`"
											v-model="amount"
											:type="`text`"
											:placeholder="`Enter amount`"
											:errors="errors"
										>
											Amount <span class="text-danger">*</span>
										</klump-input>
									</ValidationProvider>
								</div>
								<hr style="margin-top: 30px; margin-bottom: 30px" />
								<klump-button :disabled="invalid" :loading="getStatus === 'loading'">
									Create payment page
								</klump-button>
								<div class="form-group">
									<button
										ref="close"
										type="button"
										class="button-secondary font-weight-bold text-black py-3 disabled:cursor-default w-full"
										style="outline: none"
										data-dismiss="modal"
									>
										Cancel
									</button>
								</div>
							</form>
						</ValidationObserver>
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
import KlumpInput from '@/components/KlumpInput';
import KlumpButton from '@/components/KlumpButton';
import Alert from '../Alerts/Alert.vue';

export default {
	name: 'CreatePaymentPageModal',
	components: {
		ValidationObserver,
		ValidationProvider,
		KlumpInput,
		KlumpButton,
		Alert
	},
	data() {
		return {
			pageName: '',
			description: '',
			seo: '',
			fixedPayment: false,
			amount: '',
			collectPhoneNumber: false,
			fileError: null,
			fileName: '',
			file: null
		};
	},
	computed: {
		...mapGetters(['getLoggedUser', 'getStatus', 'getAlert'])
	},
	watch: {
		getStatus(val) {
			if (val === 'success') {
				this.closeCreatePayment();
			}
		}
	},
	methods: {
		...mapActions(['addPaymentPage']),
		uploadImage() {
			const img = this.$refs.image.files[0];
			this.fileName = img.name;
			const fileSize = 3 * 2 ** 20;
			const matches = img && img.type.match(/image\/*/);
			if (!matches) {
				this.fileError = 'Unsupported image format. Upload either jpg or png.';
				return false;
			}

			if (matches && img.size > fileSize) {
				this.fileError = 'Image size greater than 3MB';
				return false;
			}
			let reader = new FileReader();
			reader.readAsDataURL(img);
			reader.onload = (e) => {
				this.file = e.target.result;
			};
			return true;
		},
		createPaymentPage() {
			const payload = {
				name: this.pageName,
				description: this.description,
				is_fixed_amount: this.fixedPayment === 'Fixed Payment',
				fixed_amount: this.amount,
				is_published: true,
				currency: 'NGN',
				file: this.file
			};
			if (this.amount === '') {
				delete payload.fixed_amount;
			}
			if (this.file === null) {
				delete payload.file;
			}
			this.addPaymentPage({
				id: this.getLoggedUser.id,
				payload
			});
		},
		closeCreatePayment() {
			this.$refs['close'].click();
			return true;
		}
	}
};
</script>

<style></style>
