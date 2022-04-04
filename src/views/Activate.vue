<template>
	<klump-container>
		<div class="d-flex flex-column">
			<div class="bg-white border-container container-box-shadow rounded my-3" style="padding: 40px 35px">
				<div v-if="isSuccessful && isLoaded">
					<span
						class="d-flex justify-content-center font-weight-bold"
						style="line-height: 22px; font-size: 16px; margin-bottom: 14px"
					>
						<div class="flex justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="100"
								height="101"
								viewBox="0 0 100 101"
								fill="none"
							>
								<circle cx="50" cy="50.6162" r="50" fill="#D8FFD9" />
								<circle cx="49.9993" cy="50.6165" r="46.7742" fill="#A8FBAB" />
								<circle cx="50.001" cy="50.6163" r="43.5484" fill="#4CAF50" />
								<path
									d="M72.0044 37.2673C73.5807 38.8436 73.5807 41.3916 72.0044 42.9686L45.7944 69.1778C45.0081 69.9642 43.9759 70.3599 42.9437 70.3599C41.9116 70.3599 40.8794 69.9642 40.0931 69.1778L26.9885 56.0732C25.4114 54.4969 25.4114 51.9482 26.9885 50.3719C28.5648 48.7948 31.1128 48.7948 32.6898 50.3719L42.9437 60.6258L66.303 37.2673C67.8793 35.6902 70.4273 35.6902 72.0044 37.2673Z"
									fill="#FAFAFA"
								/>
							</svg>
						</div>
					</span>
					<p
						class="d-flex justify-content-center font-weight-bold"
						style="line-height: 22px; font-size: 16px; margin-bottom: 14px"
					>
						Your account is successfully activated
					</p>
					<span @click="gotoSignIn">
						<klump-button>Sign In</klump-button>
					</span>
				</div>
				<div v-if="isError && isLoaded">
					<span
						class="d-flex justify-content-center font-weight-bold text-danger"
						style="line-height: 22px; font-size: 16px; margin-bottom: 14px"
					>
						<div class="d-block">
							<svg
								width="100"
								height="100"
								viewBox="0 0 100 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="50" cy="50" r="50" fill="#F9BCBC" />
								<circle cx="49.9988" cy="50.0008" r="46.7742" fill="#E95757" />
								<circle cx="49.5484" cy="49.9322" r="43.5484" fill="#CE1112" />
								<path
									d="M67.28 32.3838L33 66.6638"
									stroke="white"
									stroke-width="5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M33 32.3838L67.28 66.6638"
									stroke="white"
									stroke-width="5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</span>
					<p
						class="d-flex justify-content-center font-weight-bold text-danger"
						style="line-height: 22px; font-size: 16px; margin-bottom: 14px"
					>
						Your account could not be activated
					</p>
					<span @click="gotoSignIn">
						<klump-button>Back to home</klump-button>
					</span>
				</div>
			</div>
		</div>
	</klump-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import KlumpContainer from '@/components/KlumpContainer';
import KlumpButton from '@/components/KlumpButton';

export default {
	name: 'Activate',
	components: {
		KlumpContainer,
		KlumpButton
	},
	data() {
		return {
			isSuccessful: false,
			isLoaded: false,
			isError: false
		};
	},
	computed: {
		...mapGetters(['getStatus'])
	},
	watch: {
		getStatus(val) {
			this.isLoaded = true;
			if (val === 'success') {
				this.isSuccessful = true;
			}
			if (val === 'error') {
				this.isError = true;
			}
		}
	},
	created() {
		this.activateAccount({
			code: this.$route.query.code,
			persona: this.$route.query.persona
		});
	},
	methods: {
		...mapActions(['activateAccount']),
		gotoSignIn() {
			this.$router.push({ name: 'SignIn' });
		}
	}
};
</script>
