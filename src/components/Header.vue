<template>
	<header class="navbar navbar-expand-md navbar-light">
		<Alert v-if="getAlert.message != ''" />
		<div class="container-xl">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu">
				<span class="navbar-toggler-icon" />
			</button>
			<a href="." class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pr-0 pr-md-3">
				<img id="logo" src="../assets/img/klump_logo.svg" alt="Klump" class="navbar-brand-image" />
			</a>

			<div class="navbar-nav flex-row order-md-last">
				<div class="nav-item mr-3">
					<label class="form-check form-switch">
						<input
							class="form-check-input"
							type="checkbox"
							:checked="getMerchantDetails.is_live"
							@click="handleEnvironmentToggle"
						/>
						<span class="form-check-label text-success">{{
							getMerchantDetails.is_live ? 'Live' : 'Test'
						}}</span>
					</label>
				</div>
				<div v-if="false" class="nav-item dropdown d-none d-md-flex mr-3">
					<a href="#" class="nav-link px-0" data-toggle="dropdown" tabindex="-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon cursor-pointer"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" />
							<path
								d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
							/>
							<path d="M9 17v1a3 3 0 0 0 6 0v-1" />
						</svg>
						<span class="badge bg-red" />
					</a>
				</div>
				<div class="nav-item dropdown">
					<a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-toggle="dropdown">
						<span v-if="getStatus === 'loading' && getMerchantDetails === {}">
							<Loader />
						</span>
						<span v-else>
							<img
								v-if="getMerchantDetails.logo && getMerchantDetails.logo !== null"
								:src="getMerchantDetails.logo"
								alt=""
								class="avatar"
							/>
							<span v-else class="avatar avatar mr-2 text-white bg-primary">
								{{ getBusinessInitial }}
							</span>
						</span>
						<div class="d-none d-xl-block pl-2">
							<div>{{ getMerchantDetails.firstname }} {{ getMerchantDetails.lastname }}</div>
							<div class="mt-1 small text-muted">{{ getMerchantDetails.business_name }}</div>
						</div>
					</a>
					<div class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon dropdown-item-icon"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" />
								<path
									d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
								/>
								<circle cx="12" cy="12" r="3" />
							</svg>
							Action
						</a>
						<a class="dropdown-item" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon dropdown-item-icon"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" />
								<path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
								<path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
								<line x1="16" y1="5" x2="19" y2="8" />
							</svg>
							Another action
						</a>
						<div class="dropdown-divider" />
						<router-link
							id="logoutUser"
							class="dropdown-item text-danger d-inline-flex align-items-center"
							:to="{ name: 'Logout' }"
						>
							<!-- Download SVG icon from http://tabler-icons.io/i/logout -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path
									d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
								/>
								<path d="M7 12h14l-3 -3m0 6l3 -3" />
							</svg>
							<span class="pl-2">Sign Out</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Alert from '@/components/Alerts/Alert';
import Loader from '@/components/Loader';
export default {
	name: 'Header',
	components: {
		Alert,
		Loader
	},
	computed: {
		...mapGetters(['getStatus', 'getLoggedUser', 'getMerchantDetails', 'getAlert', 'getStatus']),
		getBusinessInitial() {
			return this.getMerchantDetails && this.getMerchantDetails.business_name
				? this.getMerchantDetails.business_name.charAt(0)
				: '';
		}
	},
	created() {
		if (this.getLoggedUser.id === 'undefined') {
			this.$router.push({ name: 'SignIn' });
		} else {
			this.fetchMerchantDetails(this.getLoggedUser.id);
		}
	},
	methods: {
		...mapActions(['fetchMerchantDetails', 'toggleEnvironment']),
		handleEnvironmentToggle() {
			const payload = {
				is_live: !this.getMerchantDetails.is_live,
				id: this.getLoggedUser.id
			};
			this.toggleEnvironment(payload);
		}
	}
};
</script>

<style scoped>
.form-check-input:checked {
	background-color: #5eba00 !important;
	border-color: rgba(110, 117, 130, 0.2);
}
</style>
