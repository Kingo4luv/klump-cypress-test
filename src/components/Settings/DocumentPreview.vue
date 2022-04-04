<template>
	<div
		id="modal-doc-preview"
		class="modal fade"
		tabindex="-1"
		role="dialog"
		aria-hidden="true"
		style="background-color: rgba(0, 0, 0, 0.4)"
	>
		<div class="modal-dialog" role="document">
			<div style="position: relative; pointer-events: auto">
				<div
					style="background-color: white; position: absolute; top: -20px; right: -20px; height: 20px; width: 20px"
					type="button"
					class="btn-close rounded-circle d-flex justify-content-center"
					data-dismiss="modal"
					aria-label="Close"
					@click="closeDocumentPreview"
				>
					<!-- Download SVG icon from http://tabler-icons.io/i/x -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon"
						style="transform: translate(0px, 2px)"
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
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</div>
				<div class="document-preview-container container-box-shadow rounded my-6">
					<img :src="kyc.doc" style="object-fit: cover" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DocumentPreview',
	props: {
		kyc: {
			type: Object,
			required: true,
			default: null
		}
	},
	methods: {
		closeDocumentPreview() {
			this.$emit('closeDocumentPreview');
		}
	}
};
</script>

<style>
.document-preview-container {
	width: 100%;
	height: 300px;
}
@media only screen and (min-width: 1220px) {
	.document-preview-container {
		height: 540px;
	}
}
</style>
