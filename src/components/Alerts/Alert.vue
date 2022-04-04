<template>
	<div v-if="getAlert.message != ''">
		<div id="notification" class="toast-container">
			<Danger v-if="getAlert.type === 'danger'" :message="getAlert.message" />
			<Success v-if="getAlert.type === 'success'" :message="getAlert.message" />
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Danger from './danger/Danger';
import Success from './success/Success';

export default {
	name: 'Alert',
	components: { Danger, Success },
	computed: {
		...mapGetters(['getAlert'])
	},
	created() {
		setTimeout(() => {
			this.$store.commit('clearAlert');
		}, 6000);
		window.scrollTo(0, 0);
	}
};
</script>

<style scoped>
#notification {
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 100;
}
</style>
