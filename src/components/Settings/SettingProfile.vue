<template>
	<div id="tabs-profile-ex1" class="tab-pane active show">
		<div class="row row-sm align-items-center pt-2">
			<div class="col-1">
				<img
					v-if="getMerchantDetails.logo && getMerchantDetails.logo !== null"
					:src="getMerchantDetails.logo"
					alt=""
					class="avatar avatar-lg mr-2"
				/>
				<span v-else class="avatar avatar avatar-lg mr-2 text-white" style="background: #4062d11a">
					<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.36015 0.391602C5.79803 0.391602 3.70361 2.48602 3.70361 5.04815C3.70361 7.61027 5.79803 9.70469 8.36015 9.70469C10.9223 9.70469 13.0167 7.61027 13.0167 5.04815C13.0167 2.48602 10.9223 0.391602 8.36015 0.391602Z"
							fill="#4062D1"
						/>
						<path
							d="M16.352 13.4256C16.23 13.1206 16.0673 12.836 15.8843 12.5716C14.9489 11.1889 13.5053 10.2738 11.8785 10.0501C11.6752 10.0298 11.4515 10.0705 11.2888 10.1925C10.4348 10.8228 9.41809 11.1482 8.36068 11.1482C7.30328 11.1482 6.28658 10.8228 5.43254 10.1925C5.26985 10.0705 5.04617 10.0095 4.84285 10.0501C3.21611 10.2738 1.75206 11.1889 0.837024 12.5716C0.654017 12.836 0.491328 13.141 0.369349 13.4256C0.30836 13.5477 0.328677 13.69 0.389666 13.812C0.552356 14.0967 0.755679 14.3814 0.938685 14.6254C1.22335 15.0117 1.52838 15.3574 1.87407 15.6827C2.15874 15.9674 2.48408 16.2318 2.80946 16.4961C4.41585 17.6958 6.34761 18.3262 8.34036 18.3262C10.3331 18.3262 12.2649 17.6958 13.8713 16.4961C14.1966 16.2521 14.5219 15.9674 14.8067 15.6827C15.132 15.3574 15.4573 15.0117 15.742 14.6254C15.9454 14.361 16.1284 14.0967 16.2911 13.812C16.3927 13.69 16.413 13.5476 16.352 13.4256Z"
							fill="#4062D1"
						/>
					</svg>
				</span>
			</div>
			<div class="col-3">
				<span>
					<a href="#" class="btn btn-lg btn-outline-primary btn-block font-weight-bold cursor-pointer">
						Change company logo
					</a>
					<small v-if="fileError !== ''" class="text-danger">{{ fileError }}</small>
					<input ref="logo" type="text" name="file" hidden />
					<input
						ref="logo"
						type="file"
						accept="image/png, image/jpeg,"
						style="position: absolute; left: -3px; top: 0px; bottom: 0px; width: 100%; opacity: 0"
						@change="uploadLogo()"
					/>
				</span>
			</div>
			<div class="col-3">
				<p class="m-0 d-none d-md-block" style="color: #414141; line-height: 19px; font-size: 14px">
					Upload JPG or PNG files - Max size of 3mb.
				</p>
			</div>
		</div>
		<hr class="mt-4" />
		<div class="row row-sm align-items-center pt-2">
			<div class="col">
				<p class="label-text mb-2" style="color: #5c5c5c; font-size: 14px; line-height: 19px">Full Name</p>
				<h4 class="card-title m-0">
					<span class="label-text" style="font-weight: 500; color: black">
						{{ getMerchantDetails.firstname }}{{ getMerchantDetails.lastname }}
					</span>
				</h4>
			</div>
			<div class="col">
				<p class="label-text mb-2" style="color: #5c5c5c; font-size: 14px; line-height: 19px">Email</p>
				<h4 class="card-title m-0">
					{{ getMerchantDetails.email }}
				</h4>
			</div>
			<div class="col">
				<p class="label-text mb-2" style="color: #5c5c5c; font-size: 14px; line-height: 19px">Phone number</p>
				<h4 class="card-title m-0">
					{{ getMerchantDetails.phone }}
				</h4>
			</div>
		</div>
		<hr class="mt-4" />
		<div class="row row-sm align-items-center">
			<div class="col">
				<p class="label-text mb-2" style="color: #5c5c5c; font-size: 14px; line-height: 19px">
					Registered business?
				</p>
				<h4 class="card-title m-0 align-items-center">
					<p class="label-text pt-1" style="font-weight: 500; color: black">Yes</p>
				</h4>
			</div>
		</div>
		<hr class="mt-4" />
		<div class="row row-sm align-items-center">
			<div class="col">
				<p class="label-text mb-2" style="color: #5c5c5c; font-size: 14px; line-height: 19px">Industry</p>
				<h4 class="card-title m-0 align-items-center">
					<p
						v-if="getMerchantDetails.industry"
						class="label-text pt-1"
						style="font-weight: 500; color: black"
					>
						{{ getMerchantDetails.industry.name }}
					</p>
					<p v-else class="label-text pt-1" style="font-weight: 500; color: black">-</p>
				</h4>
			</div>
			<div class="col" />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'SettingProfile',
	data() {
		return {
			fileName: null,
			fileError: null
		};
	},
	computed: {
		...mapGetters(['getLoggedUser', 'getMerchantDetails'])
	},
	methods: {
		...mapActions(['updateImage']),
		uploadLogo() {
			const img = this.$refs.logo.files[0];
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
			const reader = new FileReader();
			reader.onload = (e) => {
				this.file = e.target.result;
				const data = {
					id: this.getLoggedUser.id,
					file: this.file
				};
				this.updateImage(data);
			};
			if (img) {
				reader.readAsDataURL(img);
			}
			return true;
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
