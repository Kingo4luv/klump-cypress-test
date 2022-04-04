<template>
	<div class="b-alert b-alert-danger b-alert-dismissible" role="alert">
		<div class="d-flex">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon b-alert-icon"
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
					<circle cx="12" cy="12" r="9" />
					<line x1="12" y1="8" x2="12" y2="12" />
					<line x1="12" y1="16" x2="12.01" y2="16" />
				</svg>
			</div>
			<div>
				<h4 class="alert-title">Error</h4>
				<div class="text-muted">
					{{ message }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Danger',
	props: {
		message: {
			type: String,
			required: true
		}
	}
};
</script>

<style scoped>
.b-alert {
	background: #fff;
	border: 1px solid rgba(101, 109, 119, 0.16);
	border-left: 0.25rem solid #d63939;
	box-shadow: rgb(35 46 60 / 4%) 0 2px 4px 0;
	position: relative;
	padding: 1rem 1rem;
	margin-bottom: 1rem;
	border-radius: 4px;
}
.b-alert-danger {
	color: #d63939;
}
.b-alert-dismissible {
	padding-right: 3rem;
}
.b-alert-icon {
	color: #d63939;
	width: 1.5rem !important;
	height: 1.5rem !important;
	margin: -0.125rem 1rem -0.125rem 0;
}
</style>
