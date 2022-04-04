<template>
	<div class="page">
		<div class="content">
			<ChargeBackTable :charge-backs="getChargeBacks" />
		</div>
	</div>
</template>
;
<script>
import { mapActions, mapGetters } from 'vuex';
import ChargeBackTable from './ChargeBackTable';

export default {
	name: 'ChargeBackIndex',
	components: {
		ChargeBackTable
	},
	computed: {
		...mapGetters(['getChargeBacks', 'getLoggedUser'])
	},
	watch: {
		$route({ query }) {
			if (query.offset && query.limit) {
				this.fetchChargeBacks({
					id: this.getLoggedUser.id,
					offset: query.offset,
					limit: query.limit
				});
			} else {
				this.fetchChargeBacks({ id: this.getLoggedUser.id });
			}
		}
	},
	created() {
		this.fetchChargeBacksMethod(this.getLoggedUser.id);
	},
	methods: {
		...mapActions(['fetchChargeBacks']),
		fetchChargeBacksMethod(id) {
			const query = this.$route.query.offset && this.$route.query.limit ? this.$route.query : null;
			if (query) {
				this.fetchChargeBacks({
					id,
					offset: query.offset,
					limit: query.limit
				});
			} else {
				this.fetchChargeBacks({ id });
			}
		}
	}
};
</script>
