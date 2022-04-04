<template>
	<div class="page">
		<div class="content">
			<PayoutTable :payouts="getMerchantPayouts" />
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PayoutTable from './PayoutTable';

export default {
	name: 'PayoutIndex',
	components: {
		PayoutTable
	},
	computed: {
		...mapGetters(['getMerchantPayouts', 'getLoggedUser'])
	},
	watch: {
		$route({ query }) {
			if (query.offset && query.limit) {
				this.fetchMerchantPayouts({
					id: this.getLoggedUser.id,
					offset: query.offset,
					limit: query.limit
				});
			} else {
				this.fetchMerchantPayouts({ id: this.getLoggedUser.id });
			}
		}
	},
	created() {
		this.fetchMerchantPayoutMethod(this.getLoggedUser.id);
	},
	methods: {
		...mapActions(['fetchMerchantPayouts']),
		fetchMerchantPayoutMethod(id) {
			const query = this.$route.query.offset && this.$route.query.limit ? this.$route.query : null;
			if (query) {
				this.fetchMerchantPayouts({
					id,
					offset: query.offset,
					limit: query.limit
				});
			} else {
				this.fetchMerchantPayouts({ id });
			}
		}
	}
};
</script>
