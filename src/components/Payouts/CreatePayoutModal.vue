<template>
	<div
		id="modal-report"
		class="modal fade"
		tabindex="-2"
		role="dialog"
		aria-hidden="true"
		style="background-color: rgba(0, 0, 0, 0.4)"
	>
		<Alert v-if="getAlert.message != ''" />
		<div class="modal-dialog" role="document">
			<div style="position: relative; pointer-events: auto">
				<div class="d-flex flex-column">
					<div class="bg-white border-container container-box-shadow rounded my-3" style="padding: 40px 35px">
						<span
							class="d-flex justify-content-center font-weight-bold"
							style="line-height: 22px; font-size: 16px; margin-bottom: 38px"
						>
							Payout Account
						</span>
						<ValidationObserver v-slot="{ invalid }">
							<form ref="form" method="post" @submit.prevent="handleAddPayoutAcount">
								<div class="mb-4">
									<ValidationProvider v-slot="{ errors }" rules="required" tag="div">
										<label
											:for="'currency'"
											class="font-weight-bold block mb-1"
											style="font-size: 16px"
										>
											Currency
										</label>
										<input
											:id="'currency'"
											type="text"
											class="form-control py-3"
											:disabled="isDisabled"
											:placeholder="`NGN`"
											:errors="errors"
										/>
									</ValidationProvider>
								</div>
								<div class="mb-4">
									<ValidationProvider v-slot="{ errors }" rules="required" tag="div">
										<klump-input
											:id="`dropdown`"
											v-model="payload.country_id"
											:type="`dropdown`"
											:errors="errors"
											:dropdown-array="getCountries"
										>
											Countries
											<span class="text-danger">*</span>
										</klump-input>
									</ValidationProvider>
								</div>

								<div class="mb-4">
									<ValidationProvider v-slot="{ errors }" rules="required" tag="div">
										<klump-input
											:id="`dropdown`"
											v-model="payload.bank_code"
											:type="`dropdown`"
											:errors="errors"
											:placeholder="`Enter bank name`"
											dropdown-val-key="code"
											:dropdown-array="getMerchantBanks"
										>
											Bank
											<span class="text-danger">*</span>
										</klump-input>
									</ValidationProvider>
								</div>
								<div class="mb-4">
									<ValidationProvider v-slot="{ errors }" rules="required|min:10|max:10" tag="div">
										<klump-input
											:id="`account-no`"
											v-model="payload.account_number"
											:type="`text`"
											:placeholder="`Enter account number`"
											:errors="errors"
										>
											Account Number <span class="text-danger">*</span>
										</klump-input>
									</ValidationProvider>
								</div>
								<klump-button :id="'createMyAccount'" :disabled="invalid">
									Create payout account
								</klump-button>
								<div class="form-group">
									<button
										ref="close"
										class="button-secondary font-weight-bold text-black py-3 disabled:cursor-default w-full"
										style="outline: none"
										type="button"
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
import Alert from '@/components/Alerts/Alert';
export default {
	name: 'CreatePayoutModal',
	components: {
		ValidationObserver,
		ValidationProvider,
		KlumpInput,
		KlumpButton,
		Alert
	},
	data() {
		return {
			validated: 0,
			payload: {
				account_number: '',
				bank_code: '',
				country_id: ''
			}
		};
	},
	computed: {
		...mapGetters(['getMerchantBanks', 'getCountries', 'getStatus', 'getAlert', 'getLoggedUser']),
		isDisabled() {
			return this.validated;
		}
	},
	watch: {
		getStatus(val) {
			if (val === 'success') {
				this.closeHandleAccount();
			}
		}
	},
	created() {
		this.fetchCountries();
		this.fetchMerchantBanks();
	},
	methods: {
		...mapActions(['addMerchantAccount', 'fetchMerchantBanks', 'fetchCountries']),
		handleAddPayoutAcount() {
			this.addMerchantAccount({
				id: this.getLoggedUser.id,
				payload: this.payload
			});
		},
		closeHandleAccount() {
			this.$refs['close'].click();
			return true;
		}
	}
};
</script>
