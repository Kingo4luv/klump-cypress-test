<template>
	<klump-container>
		<Alert v-if="getAlert.message != ''" />
		<div class="d-flex flex-column">
			<div class="bg-white border-container container-box-shadow rounded my-3" style="padding: 40px 35px">
				<span
					class="d-flex justify-content-center font-weight-bold"
					style="line-height: 22px; font-size: 16px; margin-bottom: 38px"
				>
					Create your account
				</span>
				<ValidationObserver v-slot="{ invalid }">
					<form @submit.prevent="registerMerchant">
						<div class="mb-4">
							<ValidationProvider v-slot="{ errors }" rules="required" tag="div">
								<klump-input
									:id="`business-name`"
									v-model="payload.business_name"
									:type="`text`"
									:placeholder="`Enter your Business Name`"
									:errors="errors"
								>
									Business Name
								</klump-input>
							</ValidationProvider>
						</div>
						<div class="mb-4">
							<ValidationProvider v-slot="{ errors }" rules="required" tag="div">
								<klump-input
									:id="`first-name`"
									v-model="payload.firstname"
									:type="`text`"
									:placeholder="`Enter your First Name`"
									:errors="errors"
								>
									First Name
								</klump-input>
							</ValidationProvider>
						</div>
						<div class="mb-4">
							<ValidationProvider v-slot="{ errors }" rules="required" tag="div">
								<klump-input
									:id="`last-name`"
									v-model="payload.lastname"
									:type="`text`"
									:placeholder="`Enter your Last Name`"
									:errors="errors"
								>
									Last Name
								</klump-input>
							</ValidationProvider>
						</div>
						<div class="mb-4">
							<ValidationProvider v-slot="{ errors }" rules="required|email" tag="div">
								<klump-input
									:id="`email`"
									v-model="payload.email"
									:type="`email`"
									:placeholder="`Enter Email`"
									:errors="errors"
								>
									Email
								</klump-input>
							</ValidationProvider>
						</div>
						<div class="mb-4">
							<ValidationProvider v-slot="{ errors }" rules="required|phone" tag="div">
								<klump-input
									:id="`phone-number`"
									v-model="phone"
									:type="`tel`"
									:placeholder="`801 234 5678`"
									:errors="errors"
									@dialCode="handleDialCode"
								>
									Phone Number
								</klump-input>
							</ValidationProvider>
						</div>
						<div class="mb-4">
							<ValidationProvider v-slot="{ errors }" rules="required" tag="div">
								<klump-input
									:id="`dropdown`"
									v-model="payload.industry_id"
									:type="`dropdown`"
									:errors="errors"
									:dropdown-array="getIndustries"
								>
									Industry
								</klump-input>
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
									Country
								</klump-input>
							</ValidationProvider>
						</div>
						<div class="mb-4">
							<ValidationProvider v-slot="{ errors }" rules="required|password-valid" tag="div">
								<klump-input
									:id="`password`"
									v-model="payload.password"
									:type="`password`"
									:placeholder="`Password`"
									:errors="errors"
								>
									Password
								</klump-input>
								<p class="text-xs text-rose-700">
									Your password must have at least one upper case letter, one lower case letter, one
									number, one special character and be at least 7 characters long. E.g
									<strong>P@55word</strong>
								</p>
							</ValidationProvider>
						</div>
						<div class="form-group mb-4">
							<p class="font-weight-bold block mb-2" style="font-size: 16px">
								What type of business do you own?
							</p>
							<div class="flex flex-col space-y-4">
								<div v-if="false" class="flex radio-container position-relative mb-2">
									<input
										id="is_not_business_registered"
										v-model="payload.is_business_registered"
										type="radio"
										value="false"
										class="block h-6 w-6 transform translate-y-neg1"
										:checked="payload.is_business_registered"
									/>
									<span class="checkmark" @click="payload.is_business_registered = 'false'" />
									<label
										for="is_not_business_registered"
										class="block leading-25 text-radio-label ml-4"
										>Starter Business<br /><span class="text-sm"
											>I'm testing my ideas with real customers, and preparing to register my
											company</span
										></label
									>
								</div>
								<div class="flex radio-container position-relative">
									<input
										id="is_business_registered"
										v-model="payload.is_business_registered"
										type="radio"
										value="true"
										class="block h-6 w-6 transform translate-y-neg1"
										:checked="payload.is_business_registered"
									/>
									<span class="checkmark" @click="payload.is_business_registered = 'true'" />
									<label for="is_business_registered" class="block leading-25 text-radio-label ml-4"
										>Registered Business<br /><span class="text-sm"
											>My business has the approval, documentation, and licences required to
											operate legally</span
										></label
									>
								</div>
							</div>
						</div>
						<klump-button :id="'createMyAccount'" :disabled="invalid" :loading="getStatus === 'loading'">
							Create My Account
						</klump-button>
						<ul class="d-flex justify-content-center list-unstyled">
							<li class="w-11/12 text-center text-xxs" style="line-height: 25px">
								<span
									>By clicking the “Create My Account” button, you agree to Klump’s
									<router-link id="terms" to="/terms-of-service" class="text-light-blue"
										>terms of acceptable use</router-link
									></span
								>
							</li>
						</ul>
					</form>
				</ValidationObserver>
			</div>
			<ul class="d-flex justify-content-center mt-2 mb-3 list-unstyled">
				<li style="line-height: 25px">
					<span
						>Already have an account?
						<router-link :to="{ name: 'SignIn' }" class="text-light-blue font-weight-bold"
							>Login</router-link
						></span
					>
				</li>
			</ul>
		</div>
	</klump-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '../validations.js';
import Alert from '@/components/Alerts/Alert';
import KlumpContainer from '@/components/KlumpContainer';
import KlumpInput from '@/components/KlumpInput';
import KlumpButton from '@/components/KlumpButton';

export default {
	name: 'SignUp',
	components: {
		KlumpContainer,
		KlumpInput,
		KlumpButton,
		Alert,
		ValidationObserver,
		ValidationProvider
	},
	data() {
		return {
			payload: {
				is_business_registered: false
			},
			phone: '',
			dialCode: ''
		};
	},
	computed: {
		...mapGetters(['getStatus', 'getAlert', 'getCountries', 'getIndustries'])
	},
	created() {
		this.fetchCountries();
		this.fetchIndustries();
	},
	methods: {
		...mapActions(['signUp', 'fetchCountries', 'fetchIndustries']),
		registerMerchant() {
			this.payload.phone = `${this.dialCode}${this.phone}`;
			this.signUp(this.payload);
			window.scrollTo(0, 0);
		},
		handleDialCode(val) {
			this.dialCode = val;
		}
	}
};
</script>
