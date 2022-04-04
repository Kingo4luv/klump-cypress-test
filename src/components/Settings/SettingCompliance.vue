<template>
	<div id="tabs-compliance-ex1" class="tab-pane">
		<div class="row row-sm align-items-center">
			<div class="col-auto">
				<span>
					<span class="avatar avatar-lg mr-2 text-white bg-primary">{{ getInitials }}</span>
				</span>
			</div>
			<div class="col">
				<h4 class="card-title m-0 font-weight-bold">
					<a href="#" class="label-text" style="color: black">{{ getMerchantDetails.business_name }}</a>
				</h4>
				<div class="label-text" style="line-height: 19px; font-size: 14px; color: #5c5c5c">
					<span v-if="getMerchantDetails.industry">{{ getMerchantDetails.industry.name }}</span>
					<span v-else> - </span>
				</div>
			</div>
			<div class="col-auto">
				<button
					type="button"
					class="button-primary text-white d-inline-flex align-items-center mr-3"
					@click="isEdited = !isEdited"
				>
					<span v-if="getStatus === 'loading'">
						<Loader />
					</span>
					<span v-else>
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
						{{ !isEdited ? 'Edit details' : 'Save Changes' }}
					</span>
				</button>
			</div>
			<hr class="mt-4 pl-0 ml-0" />
			<div v-if="!isEdited" class="row row-sm align-items-center">
				<div class="col">
					<p class="label-text mb-2" style="color: #5c5c5c; font-size: 14px; line-height: 19px">Location</p>
					<h4 class="card-title m-0 font-weight-bold align-items-center">
						<span v-if="getMerchantDetails.country" class="label-text" style="color: black">{{
							getMerchantDetails.country.name
						}}</span>
						<span v-else class="label-text" style="color: black"> - </span>
					</h4>
				</div>
				<div class="col">
					<p class="label-text mb-2" style="color: #5c5c5c; font-size: 14px; line-height: 19px">Staff</p>
					<h4 class="card-title m-0 align-items-center">
						<span class="label-text" style="color: black">
							{{ getMerchantDetails.staff ? getMerchantDetails.staff : '-' }}
						</span>
					</h4>
				</div>
				<div class="col" />
			</div>
			<ValidationObserver>
				<form>
					<div v-if="isEdited" class="row row-sm align-items-center">
						<div class="col">
							<div class="form-label">Location</div>
							<select class="form-select font-weight-bold" disabled>
								<option value="Nigeria">Nigeria</option>
							</select>
						</div>
						<div class="col">
							<ValidationProvider v-slot="{ errors }" rules="required">
								<div class="form-label">Staff</div>
								<select v-model="payload.staff" class="form-select font-weight-bold">
									<option disabled selected>Select <slot /></option>
									<template>
										<option
											v-for="size in staffSizes"
											:key="size.id"
											:value="size.name || payload.size"
											selected
										>
											{{ size.name }}
										</option>
									</template>
								</select>
								<div class="text-xs text-danger mt-0">
									{{ errors[0] }}
								</div>
							</ValidationProvider>
						</div>
						<div class="col" />
					</div>
				</form>
			</ValidationObserver>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '@/components/Loader';
export default {
	name: 'SettingCompliance',
	components: {
		Loader
	},
	data() {
		return {
			isEdited: false,
			payload: {},
			staffSizes: [
				{ id: '1', name: '1 - 10' },
				{ id: '2', name: '11 - 20' },
				{ id: '3', name: '21 - 50' },
				{ id: '4', name: '51 - 100' },
				{ id: '5', name: '101 - 500' },
				{ id: '6', name: '501 - 1000' },
				{ id: '7', name: '1000+' }
			]
		};
	},
	computed: {
		...mapGetters(['getMerchantDetails', 'getStatus']),
		getInitials() {
			const firstInitial = this.getMerchantDetails.business_name.charAt(0);
			const lastInitial = this.getMerchantDetails.business_name.charAt(1);
			return `${firstInitial} ${lastInitial}`;
		}
	},
	watch: {
		isEdited(val) {
			if (!val) {
				this.$emit('merchantDetails', this.payload);
			}
			this.$emit('emitIsEdited', val);
		}
	},
	mounted() {
		this.payload = {
			staff: this.getMerchantDetails.staff
		};
	},
	methods: {
		updateMerchantDetailHandler() {
			this.$emit('merchantDetails', this.payload);
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
