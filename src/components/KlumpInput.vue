<template>
	<div class="form-group">
		<div class="d-flex justify-content-between">
			<label :for="id" class="font-weight-bold block mb-1" style="font-size: 16px">
				<slot />
			</label>
			<router-link
				v-if="path === '/sign-in' && type === 'password'"
				id="forgetPassword"
				:to="{ name: 'ForgotPassword' }"
				class="text-light-blue font-weight-bold"
			>
				Forgot password
			</router-link>
		</div>
		<input
			v-if="type === 'text' || type === 'email'"
			:id="id"
			v-model="inputData"
			:type="type"
			class="form-control py-3"
			:class="inputErrorState"
			:placeholder="placeholder"
			@focus="active = true"
			@input="emitInputData"
		/>
		<div v-if="type === 'dropdown'" class="mb-3">
			<label class="form-label" :for="id" />
			<select
				:id="id"
				v-model="inputData"
				class="form-select form-control"
				style="height: 55px"
				:class="inputErrorState"
				@change="emitInputData"
			>
				<option disabled selected>Select <slot /></option>
				<template>
					<option v-for="(dropdown, i) in dropdownArray" :key="i" :value="dropdown[dropdownValKey]" selected>
						{{ dropdown.name }}
					</option>
				</template>
			</select>
		</div>
		<textarea
			v-if="type === 'textarea'"
			:id="id"
			v-model="inputData"
			:type="type"
			class="form-control py-3"
			:class="inputErrorState"
			:placeholder="placeholder"
			rows="3"
			style="resize: none !important"
			@focus="active = true"
			@input="emitInputData"
		/>
		<div v-if="type === 'tel'" class="d-flex" style="align-items: center">
			<div class="rounded px-4 border mr-2" style="padding-top: 9.5px; padding-bottom: 9.5px">
				<vue-country-code
					id="countryCode"
					:preferred-countries="['ng']"
					:only-countries="['ng']"
					:enabled-country-code="true"
					:enabled-flags="true"
					@onSelect="onSelect"
				/>
			</div>
			<input
				:id="id"
				v-model="inputData"
				:type="type"
				class="form-control py-3"
				:class="inputErrorState"
				:placeholder="placeholder"
				@focus="active = true"
				@input="emitInputData"
			/>
		</div>
		<div v-if="type === 'password'" class="position-relative">
			<svg
				v-if="!showPasswordEye"
				style="top: 20px; right: 12px"
				class="position-absolute cursor-pointer"
				width="16"
				height="12"
				viewBox="0 0 16 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				@click="showPasswordEye = !showPasswordEye"
			>
				<path
					d="M8.14293 7.38351C8.93191 7.38351 9.5715 6.74392 9.5715 5.95494C9.5715 5.16596 8.93191 4.52637 8.14293 4.52637C7.35395 4.52637 6.71436 5.16596 6.71436 5.95494C6.71436 6.74392 7.35395 7.38351 8.14293 7.38351Z"
					stroke="black"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M15.2857 5.95508C13.3807 9.28865 11 10.9551 8.14286 10.9551C5.28571 10.9551 2.905 9.28865 1 5.95508C2.905 2.62151 5.28571 0.955078 8.14286 0.955078C11 0.955078 13.3807 2.62151 15.2857 5.95508Z"
					stroke="black"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<svg
				v-if="showPasswordEye"
				style="top: 20px; right: 12px"
				class="position-absolute cursor-pointer"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 1000 1000"
				width="18"
				height="12"
				enable-background="new 0 0 1000 1000"
				xml:space="preserve"
				@click="showPasswordEye = !showPasswordEye"
			>
				<g>
					<path
						d="M987.4,502.6L987.4,502.6L987.4,502.6c0,2.6,0,2.6,0,2.6l0,0l0,0c0,7.7-5.1,15.4-10.3,20.6c-10.3,12.9-20.6,25.7-33.5,36c-61.8,64.3-131.3,123.5-208.5,164.7c-48.9,25.7-100.4,48.9-154.4,59.2c-59.2,10.3-118.4,10.3-177.6-2.6c-46.3-10.3-92.7-28.3-133.8-51.5l2.6-2.6l123.5-84.9c30.9,23.2,66.9,36,108.1,36c100.4,0,182.7-84.9,182.7-190.5c0-12.9-2.6-28.3-5.1-41.2l162.2-110.7c10.3,7.7,20.6,18,30.9,25.7c38.6,30.9,74.6,66.9,105.5,108.1c5.1,5.1,10.3,12.9,10.3,20.6l0,0l0,0l0,0l0,0l0,0C987.4,497.4,987.4,500,987.4,502.6C987.4,500,987.4,500,987.4,502.6z M498.4,587.5c-5.1,0-12.9,0-18-2.6l108.1-74.6C578.2,554.1,542.1,587.5,498.4,587.5z M899.9,247.8L107.2,790.8l0,0l0,0c-5.1,2.6-10.3,5.1-12.9,5.1c-12.9,0-23.2-10.3-23.2-23.2c0-7.7,5.1-15.4,10.3-20.6l0,0l795.3-543.1l0,0l0,0c2.6-2.6,7.7-5.1,12.9-5.1c12.9,0,23.2,10.3,23.2,23.2C912.8,237.5,907.6,242.6,899.9,247.8L899.9,247.8z M498.4,397c7.7,0,18,2.6,25.7,2.6l-115.8,79.8C413.5,433.1,452.1,397,498.4,397z M609.1,340.4c-30.9-25.7-69.5-38.6-110.7-38.6c-100.4,0-182.7,84.9-182.7,190.5c0,18,2.6,33.5,5.1,48.9L161.2,651.9l-7.7,5.1c-10.3-7.7-18-15.4-28.3-23.2C86.6,603,50.5,566.9,19.7,525.7c-12.9-18-12.9-38.6,0-54.1c10.3-12.9,20.6-25.7,33.5-36c59.2-64.3,131.3-123.5,205.9-164.7c48.9-25.7,100.4-48.9,154.4-59.2c59.2-10.3,118.4-10.3,177.6,2.6c43.8,10.3,87.5,25.7,126.1,48.9l-7.7,5.1L609.1,340.4z"
					/>
				</g>
			</svg>
			<input
				:id="id"
				v-model="inputData"
				:type="showPasswordEye ? 'text' : type"
				class="form-control py-3"
				:class="inputErrorState"
				:placeholder="placeholder"
				@focus="active = true"
				@input="emitInputData"
			/>
		</div>
	</div>
</template>

<script>
import VueCountryCode from 'vue-country-code';

export default {
	name: 'KlumpInput',
	components: {
		VueCountryCode
	},
	props: {
		/**
		 * input type
		 */
		type: {
			type: String,
			required: true,
			default: 'text'
		},
		/**
		 * input placeholder
		 */
		placeholder: {
			type: String,
			default: 'placeholder'
		},
		/**
		 * input id
		 */
		id: {
			type: String,
			required: true,
			default: 'id'
		},
		/**
		 * input errors
		 */
		errors: {
			type: Array,
			default: () => []
		},
		/**
		 * dropdown array
		 */
		dropdownArray: {
			type: Array,
			default: () => []
		},
		dropdownValKey: {
			type: String,
			default: 'id'
		}
	},
	data() {
		return {
			inputData: '',
			active: false,
			dialCode: '',
			tel: '',
			phoneData: '',
			showPasswordEye: false
		};
	},
	computed: {
		/**
		 * checks for error in input
		 * returns ( default | error | success ) class
		 */
		inputErrorState() {
			let errorState = null;
			if (this.errors.length === 0 && !this.active && this.inputData) {
				// default
				errorState = 'border';
			}
			if ((this.errors.length > 0 && this.active) || (this.inputData && this.dropdownArray.length === 0)) {
				// error
				errorState = 'border-danger';
			}
			if (this.errors.length === 0 && this.active && this.inputData) {
				// success
				errorState = 'border-success';
			}
			return errorState;
		},
		/**
		 * returns current path
		 */
		path() {
			return this.$route.path;
		}
	},
	watch: {
		dialCode(val) {
			this.tel = `+${val}`;
			this.emitInputData();
		}
	},
	methods: {
		emitInputData() {
			if (this.type === 'tel') {
				this.$emit('input', this.inputData);
				this.$emit('dialCode', this.tel);
			} else {
				this.$emit('input', this.inputData);
			}
		},
		onSelect({ dialCode }) {
			this.dialCode = dialCode;
		}
	}
};
</script>
<style>
.vue-country-select {
	outline: none !important;
	border: none !important;
}
.vue-country-select .dropdown:hover {
	outline: none !important;
	background-color: white !important;
}
.vue-country-select .dropdown.open {
	outline: none !important;
	background-color: white !important;
}
.vue-country-select:focus-within {
	box-shadow: none !important;
}
.form-control:focus {
	box-shadow: none !important;
	border: 1px solid rgba(110, 117, 130, 0.2);
}
</style>
