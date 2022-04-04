<template>
	<div id="tabs-payout-ex1" class="tab-pane m-0 p-0">
		<div class="content">
			<EmptyPayout v-if="!getMerchantBankDetails.length" />
			<SettingPayoutTable v-else :banks="getMerchantBankDetails" />
		</div>
		<CreatePayoutModal />
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CreatePayoutModal from '../Payouts/CreatePayoutModal.vue';
import EmptyPayout from '../Payouts/EmptyPayout';
import SettingPayoutTable from './SettingPayoutTable';
export default {
	name: 'SettingPayout',
	components: {
		EmptyPayout,
		SettingPayoutTable,
		CreatePayoutModal
	},
	computed: {
		...mapGetters(['getMerchantBankDetails', 'getLoggedUser'])
	},
	created() {
		this.fetchMerchantBankMethod(this.getLoggedUser.id);
	},
	methods: {
		...mapActions(['fetchMerchantBankDetails']),
		fetchMerchantBankMethod(id) {
			this.fetchMerchantBankDetails({ id: id });
		}
	}
};
</script>
<style scoped>
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
	border: none;
}
</style>
