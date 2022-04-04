<template>
	<div :id="modalId" class="modal modal-blur fade" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-sm modal-dialog-centered" role="document">
			<div class="modal-content" style="border-radius: 6px">
				<button ref="closeModal" type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
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
						<path stroke="none" d="M0 0h24v24H0z" />
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>
				<div class="b-modal-status bg-danger" />
				<div class="modal-body text-center py-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon mb-2 text-danger icon-lg"
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
						<path d="M12 9v2m0 4v.01" />
						<path
							d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"
						/>
					</svg>
					<h3>Are you sure?</h3>
					<div class="text-muted">
						{{ message }}
					</div>
				</div>
				<div class="modal-footer">
					<div class="w-100">
						<div class="row">
							<div class="col">
								<button class="btn btn-white w-100" data-dismiss="modal">Cancel</button>
							</div>
							<div class="col">
								<button class="btn btn-danger w-100" data-dismiss="modal" @click="initializePayload()">
									Yes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'ConfirmationModal',
	props: {
		modalId: {
			type: String,
			required: true
		},
		message: {
			type: String,
			required: true
		},
		modalPayload: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			payload: this.$props.modalPayload
		};
	},
	watch: {
		modalPayload(data) {
			this.payload = data;
		}
	},
	methods: {
		...mapActions(['deleteKycDoc']),
		initializePayload() {
			if (this.modalId === 'modal-delete-kyc') {
				this.deleteKycDoc(this.payload);
			}
			this.$refs.closeModal.click();
		}
	}
};
</script>

<style scoped>
.b-modal-status {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 6px;
	border-radius: 6px 6px 0 0;
}
.modal-content .btn-close {
	position: absolute;
	top: 0;
	right: 0;
	width: 3.5rem;
	height: 3.5rem;
	margin: 0;
	padding: 0;
	z-index: 10;
	background: transparent;
	border: none;
	outline: none;
}
</style>
