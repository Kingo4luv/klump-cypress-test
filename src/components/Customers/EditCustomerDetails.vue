<template>
	<div class="card">
		<div class="card-body">
			<div class="row row-sm align-items-center">
				<div class="col-auto">
					<span>
						<span class="avatar avatar-lg mr-2 text-white bg-primary">EB</span>
					</span>
				</div>
				<div class="col">
					<h4 class="card-title m-0">
						<a href="#" class="label-text" style="color: black">Edmond Benson</a>
					</h4>
					<div class="label-text" style="line-height: 19px; font-size: 14px; color: #5c5c5c">
						Added on Jan 29, 2021
					</div>
				</div>
				<div class="col-auto">
					<button
						type="button"
						class="button-primary d-inline-flex text-white align-items-center mr-3"
						style="padding-left: 35px; padding-right: 35px"
					>
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
						Save changes
					</button>
					<button
						type="button"
						class="button-danger d-inline-flex text-white align-items-center"
						style="opacity: 0.3"
						disabled
					>
						<span class="mb-1">
							<svg
								width="17"
								height="17"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2"
							>
								<path
									d="M11.9515 2.0475C10.9718 1.06931 9.72408 0.403402 8.36591 0.133937C7.00775 -0.135528 5.60015 0.00354951 4.32104 0.533591C3.04193 1.06363 1.94873 1.96084 1.17962 3.11182C0.410501 4.26279 0 5.61586 0 7C0 8.38414 0.410501 9.73721 1.17962 10.8882C1.94873 12.0392 3.04193 12.9364 4.32104 13.4664C5.60015 13.9965 7.00775 14.1355 8.36591 13.8661C9.72408 13.5966 10.9718 12.9307 11.9515 11.9525C13.2633 10.6379 14 8.85683 14 7C14 5.14317 13.2633 3.36213 11.9515 2.0475ZM3.61995 3.62409C4.37782 2.86638 5.3687 2.38563 6.43309 2.25923C7.49749 2.13284 8.57347 2.36814 9.48783 2.92727L2.92764 9.49932C2.36668 8.58443 2.12993 7.5075 2.25551 6.44181C2.38108 5.37611 2.86168 4.38364 3.61995 3.62409ZM10.3743 10.3759C9.61644 11.1336 8.62555 11.6144 7.56115 11.7408C6.49676 11.8672 5.42078 11.6319 4.50642 11.0727L11.0666 4.50068C11.6276 5.41557 11.8643 6.4925 11.7387 7.55819C11.6132 8.62389 11.1326 9.61636 10.3743 10.3759Z"
									fill="white"
								/>
							</svg>
						</span>
						Blacklist customer
					</button>
				</div>
			</div>
			<hr class="my-4" />
			<form>
				<div class="row row-sm align-items-center justify-content-between">
					<div class="col mr-6">
						<label class="card-title mb-2 text-muted font-weight-semibold">
							<span class="label-text" style="color: #5c5c5c; font-size: 14px; line-height: 19px"
								>Email</span
							>
						</label>
						<input type="text" value="edmondbenson@mail.com" class="form-control" />
					</div>
					<div class="col mr-6">
						<label class="card-title mb-2 text-muted font-weight-semibold opacity-50">
							<span class="label-text" style="color: #5c5c5c; font-size: 14px; line-height: 19px"
								>Reference Number</span
							>
						</label>
						<input type="text" value="KLP_48hdb2bh9y2oe0s" class="form-control opacity-50" readonly />
					</div>
					<div class="col">
						<label class="card-title mb-2 text-muted font-weight-semibold">
							<span class="label-text" style="color: #5c5c5c; font-size: 14px; line-height: 19px"
								>Phone Number</span
							>
						</label>
						<input type="text" value="+234 000 000 0000" class="form-control" />
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EditCustomerDetails'
};
</script>
