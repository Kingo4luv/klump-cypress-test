<template>
	<klump-container>
		<Alert v-if="getAlert.message != ''" />
		<div class="d-flex flex-column">
			<div class="bg-white border-container container-box-shadow rounded my-3" style="padding: 40px 35px">
				<div>
					<span
						class="d-flex justify-content-center font-weight-bold"
						style="line-height: 22px; font-size: 16px; margin-bottom: 14px"
					>
						Set a new password
					</span>
					<ValidationObserver v-slot="{ invalid }">
						<form @submit.prevent="handleSetNewPassword">
							<ValidationProvider v-slot="{ errors }" rules="required|password-valid" tag="div">
								<div class="mb-4">
									<klump-input
										:id="`password`"
										v-model="payload.password"
										:type="`password`"
										:placeholder="`Password`"
										:errors="errors"
									>
										Password
									</klump-input>
								</div>
							</ValidationProvider>
							<ValidationProvider v-slot="{ errors }" rules="required|password-valid" tag="div">
								<klump-input
									:id="`password`"
									v-model="payload.confirm_password"
									:type="`password`"
									:placeholder="`Password`"
									:errors="errors"
								>
									Confirm Password
								</klump-input>
							</ValidationProvider>
							<klump-button :disabled="invalid || comparePassword" :loading="getStatus === 'loading'">
								Reset Password
							</klump-button>
						</form>
					</ValidationObserver>
				</div>
			</div>
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
			payload: {}
		};
	},
	computed: {
		...mapGetters(['getStatus', 'getAlert']),
		comparePassword() {
			return this.payload.password !== this.payload.confirm_password;
		}
	},
	methods: {
		...mapActions(['setNewPassword']),
		handleSetNewPassword() {
			this.setNewPassword({
				password: this.payload.password,
				confirm_password: this.payload.confirm_password,
				persona: 'merchant',
				token: this.$route.params.id
			});
		}
	}
};
</script>
