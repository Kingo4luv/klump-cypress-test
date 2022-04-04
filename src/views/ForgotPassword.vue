<template>
	<klump-container>
		<Alert v-if="getAlert.message != ''" />
		<div class="d-flex flex-column">
			<div class="bg-white border-container container-box-shadow rounded my-3" style="padding: 40px 35px">
				<span
					class="d-flex justify-content-center font-weight-bold"
					style="line-height: 22px; font-size: 16px; margin-bottom: 14px"
				>
					Forgot password
				</span>
				<p class="d-flex" style="margin-bottom: 28px; color: #6a6a6a; font-size: 16px">
					Enter your email address and your password will be reset and emailed to you.
				</p>
				<ValidationObserver v-slot="{ invalid }">
					<form @submit.prevent="handleForgetPassword">
						<ValidationProvider v-slot="{ errors }" rules="required|email" tag="div">
							<div style="margin-bottom: 32px">
								<klump-input
									:id="`email`"
									v-model="email"
									:type="`email`"
									:placeholder="`Enter email`"
									:errors="errors"
								>
									Email
								</klump-input>
							</div>
						</ValidationProvider>
						<klump-button :id="'forgetPassword'" :disabled="invalid" :loading="getStatus === 'loading'">
							<span class="d-inline-flex" style="align-items: center">
								<svg
									class="mr-2"
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="14"
									viewBox="0 0 18 14"
									fill="none"
								>
									<path
										d="M14.7143 1H2.71429C1.76751 1 1 1.76751 1 2.71429V11.2857C1 12.2325 1.76751 13 2.71429 13H14.7143C15.6611 13 16.4286 12.2325 16.4286 11.2857V2.71429C16.4286 1.76751 15.6611 1 14.7143 1Z"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M1 2.71436L8.71429 7.85721L16.4286 2.71436"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								Send me new password
							</span>
						</klump-button>
					</form>
				</ValidationObserver>
			</div>
			<ul class="d-flex justify-content-center mt-2 mb-3 list-unstyled">
				<li style="line-height: 25px">
					<span
						>Forget it,
						<router-link :to="{ name: 'SignIn' }" class="text-light-blue font-weight-bold"
							>send me back</router-link
						>
						to the sign in screen.</span
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
import KlumpContainer from '@/components/KlumpContainer';
import KlumpInput from '@/components/KlumpInput';
import KlumpButton from '@/components/KlumpButton';
import Alert from '@/components/Alerts/Alert';

export default {
	name: 'ForgotPassword',
	components: {
		KlumpContainer,
		KlumpInput,
		KlumpButton,
		ValidationObserver,
		ValidationProvider,
		Alert
	},
	data() {
		return {
			email: ''
		};
	},
	computed: {
		...mapGetters(['getAlert', 'getStatus'])
	},
	methods: {
		...mapActions(['forgetPassword']),
		handleForgetPassword() {
			this.forgetPassword({
				email: this.email,
				persona: 'merchant'
			});
		}
	}
};
</script>
