<template>
	<footer class="footer footer-transparent">
		<div class="container">
			<div class="row text-center align-items-center flex-row-reverse">
				<div class="col-lg-auto ml-lg-auto" />
				<div class="col-12 col-lg-auto mt-3 mt-lg-0">
					Copyright © {{ getYear }} <a href="." class="link-secondary">Klump Inc.</a> All rights reserved.
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	computed: {
		getYear() {
			return new Date().getFullYear();
		}
	}
};
</script>
