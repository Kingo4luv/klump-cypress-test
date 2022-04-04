<template>
	<div class="b-alert b-alert-success b-alert-dismissible" role="alert">
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
					<path d="M5 12l5 5l10 -10" />
				</svg>
			</div>
			<div>
				<h4 class="alert-title">Success</h4>
				<div class="text-muted">
					{{ message }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Success',
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
	border-left: 0.25rem solid #2fb344;
	box-shadow: rgb(35 46 60 / 4%) 0 2px 4px 0;
	position: relative;
	padding: 1rem 1rem;
	margin-bottom: 1rem;
	border-radius: 4px;
}
.b-alert-danger {
	color: #2fb344;
}
.b-alert-dismissible {
	padding-right: 3rem;
}
.b-alert-icon {
	color: #2fb344;
	width: 1.5rem !important;
	height: 1.5rem !important;
	margin: -0.125rem 1rem -0.125rem 0;
}
</style>
