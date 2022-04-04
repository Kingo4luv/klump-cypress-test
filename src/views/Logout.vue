<template>
	<div />
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	name: 'Logout',
	created() {
		this.logout();
		this.resetAll();
		this.$router.push({
			name: 'home'
		});
	},
	methods: {
		...mapMutations(['resetAll', 'logout'])
	}
};
</script>
