<template>
	<div class="page">
		<div class="content">
			<EmptyPage v-if="getMerchantPaymentPages.data.length < 1" />
			<PaymentTable v-else :pages="getMerchantPaymentPages" />
		</div>
		<CreatePaymentPageModal />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import EmptyPage from './EmptyPage';
import PaymentTable from './PaymentTable';
import CreatePaymentPageModal from './CreatePaymentPageModal';

export default {
	name: 'PaymentIndex',
	components: {
		EmptyPage,
		PaymentTable,
		CreatePaymentPageModal
	},
	data() {
		return {
			payments: []
		};
	},
	computed: {
		...mapGetters(['getMerchantPaymentPages', 'getLoggedUser', 'getStatus'])
	},
	watch: {
		$route({ query }) {
			if (query.offset && query.limit) {
				this.fetchMerchantPaymentPages({
					id: this.getLoggedUser.id,
					offset: query.offset,
					limit: query.limit
				});
			} else {
				this.fetchMerchantPaymentPages({ id: this.getLoggedUser.id });
			}
		}
	},
	created() {
		this.fetchMerchantPaymentPagesMethod(this.getLoggedUser.id);
	},
	methods: {
		...mapActions(['fetchMerchantPaymentPages']),
		fetchMerchantPaymentPagesMethod(id) {
			const query = this.$route.query.offset && this.$route.query.limit ? this.$route.query : null;
			if (query) {
				this.fetchMerchantPaymentPages({
					id,
					offset: query.offset,
					limit: query.limit
				});
			} else {
				this.fetchMerchantPaymentPages({ id });
			}
		}
	}
};
</script>
