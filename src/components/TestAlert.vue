<template>
	<div id="navbar-menu" class="collapse navbar-collapse">
		<div class="navbar navbar-light test_alert_bg">
			<div class="container-xl d-flex justify-content-center align-items-center">
				<p class="text-center text-white mt-2 h2">You are currently in test mode</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TestAlert'
};
</script>

<style scoped>
.test_alert_bg {
	background-color: #de5a5b;
}
</style>
