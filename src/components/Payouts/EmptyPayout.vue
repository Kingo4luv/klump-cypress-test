<template>
	<div class="page">
		<div class="content">
			<div class="container-xl d-flex justify-content-center align-items-center">
				<div class="text-center">
					<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M27.9541 24.5455H23.1815C20.1739 24.5455 17.727 22.0986 17.727 19.0911C17.727 16.0835 20.1739 13.6366 23.1815 13.6366H27.9541C28.331 13.6366 28.636 13.3317 28.636 12.9548V10.9094C28.636 9.47963 27.527 8.31687 26.1258 8.20412L22.2101 1.36474C21.8472 0.732193 21.2613 0.280091 20.5601 0.0923594C19.8623 -0.0940936 19.1326 0.00383102 18.5081 0.367341L5.08479 8.18213H2.72725C1.22316 8.18213 0 9.40523 0 10.9094V27.2728C0 28.7768 1.2231 30 2.72725 30H25.9087C27.4128 30 28.636 28.7769 28.636 27.2728V25.2273C28.636 24.8505 28.331 24.5455 27.9541 24.5455ZM23.0557 5.58726L24.5413 8.18213H18.5986L23.0557 5.58726ZM7.79498 8.18213L19.1945 1.54582C19.5028 1.36538 19.863 1.31744 20.2072 1.40936C20.5555 1.50255 20.8458 1.72761 21.0262 2.04254L21.0276 2.04503L10.4867 8.18213H7.79498Z"
							fill="#4062D1"
						/>
						<path
							d="M27.9544 15.0002H23.1817C20.9258 15.0002 19.0908 16.8352 19.0908 19.0911C19.0908 21.3469 20.9258 23.1819 23.1817 23.1819H27.9544C29.0823 23.1819 29.9998 22.2644 29.9998 21.1365V17.0457C29.9998 15.9177 29.0823 15.0002 27.9544 15.0002ZM23.1817 20.4547C22.43 20.4547 21.8181 19.8428 21.8181 19.0911C21.8181 18.3394 22.43 17.7275 23.1817 17.7275C23.9334 17.7275 24.5453 18.3394 24.5453 19.0911C24.5453 19.8428 23.9334 20.4547 23.1817 20.4547Z"
							fill="#4062D1"
						/>
					</svg>

					<h4 class="mt-4" style="font-size: 24px; line-height: 33px; color: #000000; font-weight: 500">
						Add a payout account
					</h4>

					<p style="font-size: 18px; line-height: 25px; color: #555555" class="px-6">
						Please add company's account, this is where the payout from
						<br />each purchase will go to after one business day.
					</p>
					<button
						class="button-primary text-white d-inline-flex align-items-center px-3 py-2"
						data-toggle="modal"
						data-target="#modal-report"
						style="outline: none"
					>
						<span style="display: inline-block; font-weight: 500"> + Payout Account </span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EmptyPayout',
	methods: {
		openNewPayoutModal() {
			this.$emit('open-new-payout-modal');
		}
	}
};
</script>
