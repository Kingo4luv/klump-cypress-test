<template>
	<div id="navbar-menu" class="collapse navbar-collapse">
		<div class="navbar navbar-light test_alert_bg">
			<div class="container-xl d-flex justify-content-center align-items-center">
				<span class="mr-2"
					><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_671_6438)">
							<path
								d="M14.9518 13.4L8.52958 0.6C8.1282 -0.2 7.02438 -0.2 6.62299 0.6L0.100418 13.4C-0.300971 14.1 0.301113 15 1.10389 15H13.9483C14.7511 15 15.2528 14.1 14.9518 13.4ZM7.52611 13C6.72333 13 6.0209 12.3 6.0209 11.5C6.0209 10.7 6.62299 10 7.52611 10C8.42924 10 9.03132 10.7 9.03132 11.5C9.03132 12.4 8.32889 13 7.52611 13ZM8.52958 9H6.52264L6.0209 5.5C6.0209 5.2 6.2216 5 6.52264 5H8.52958C8.83063 5 9.03132 5.2 9.03132 5.5L8.52958 9Z"
								fill="#232C3C"
							/>
						</g>
						<defs>
							<clipPath id="clip0_671_6438">
								<rect width="15.0521" height="15" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</span>
				<p class="text-center text-black text-sm mt-2 h3">
					{{ promptData.prompt.message }}
					<router-link :to="promptData.prompt.url" class="text-blue">
						<ins>click here</ins>
					</router-link>
					to do it
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TestAlert',
	props: {
		promptData: {
			type: Object,
			required: true
		}
	}
};
</script>

<style scoped>
.test_alert_bg {
	background-color: #f8eeca;
	color: #232c3c;
	border: 1px solid #ffbc00;
}
</style>
