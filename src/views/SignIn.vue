<template>
	<klump-container>
		<Alert v-if="getAlert.message != ''" />
		<div class="d-flex flex-column">
			<div class="bg-white border-container container-box-shadow rounded my-3" style="padding: 40px 35px">
				<h1
					class="d-flex justify-content-center font-weight-bold"
					style="line-height: 22px; font-size: 16px; margin-bottom: 14px"
				>
					Login to your account
				</h1>
				<ValidationObserver v-slot="{ invalid }">
					<form id="signin-form" @submit.prevent="signInMerchant">
						<ValidationProvider v-slot="{ errors }" rules="required|email" tag="div">
							<div class="mb-4">
								<klump-input
									:id="`email`"
									v-model="payload.email"
									:type="`email`"
									:placeholder="`Enter mail`"
									:errors="errors"
								>
									Email
								</klump-input>
							</div>
						</ValidationProvider>
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
						</ValidationProvider>
						<klump-button :id="'signIn'" :disabled="invalid" :loading="getStatus === 'loading'">
							Sign in
						</klump-button>
					</form>
				</ValidationObserver>
			</div>
			<ul class="d-flex justify-content-center mt-2 mb-3 list-unstyled">
				<li style="line-height: 25px">
					<span
						>Don't have account yet?
						<router-link id="signMeUp" :to="{ name: 'SignUp' }" class="text-light-blue"
							>Sign me up</router-link
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
import KlumpContainer from '@/components/KlumpContainer';
import KlumpInput from '@/components/KlumpInput';
import KlumpButton from '@/components/KlumpButton';
import Alert from '@/components/Alerts/Alert';

export default {
	name: 'SignIn',
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
				type: 'email_password',
				persona: 'merchant'
			}
		};
	},
	computed: {
		...mapGetters(['getStatus', 'getAlert'])
	},
	watch: {
		getStatus(val) {
			if (val === 'success') {
				this.$router.push({
					name: 'home'
				});
			}
		}
	},
	methods: {
		...mapActions(['signIn']),
		signInMerchant() {
			this.signIn(this.payload);
		}
	}
};
</script>
