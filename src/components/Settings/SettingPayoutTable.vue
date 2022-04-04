<template>
	<div class="row row-sm align-items-center pt-2 m-0 p-0">
		<p class="p-2 pl-4 font-weight-bold">Payout Accounts</p>
		<div class="table-responsive m-0 p-0">
			<table class="table card-table table-vcenter text-nowrap datatable">
				<thead class="font-weight-bold">
					<tr>
						<th class="pl-4">CURRENCY</th>
						<th>BANK</th>
						<th>ACCOUNT DETAILS</th>
						<th>ACCOUNT STATUS</th>
						<th class="pl-5">ENABLED</th>
					</tr>
				</thead>
				<tbody class="p-0 m-0">
					<tr v-for="bank in banks" :key="bank.id">
						<td class="pl-4">NGN</td>
						<td>{{ bank.bank_name }}</td>
						<td>{{ bank.account_number }}</td>
						<td>
							<span v-if="bank.is_primary === 'true'" class="badge bg-success m-1 align-middle"
								>Primary</span
							>
							<span v-else class="badge bg-danger m-1 align-middle">Off</span>
						</td>
						<td class="pl-5">
							<label class="form-check form-switch">
								<input
									class="form-check-input"
									type="checkbox"
									:checked="bank.is_primary === 'true'"
									@click="handleAccountToggle(bank.id)"
								/>
							</label>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'SettingPayoutTable',
	props: {
		banks: {
			type: Array,
			default: () => ({})
		}
	},
	computed: {
		...mapGetters(['getMerchantBankDetails', 'getAlert', 'getStatus', 'getLoggedUser'])
	},
	methods: {
		...mapActions(['fetchMerchantBankDetails', 'toggleAccount']),
		handleAccountToggle(bankId) {
			const primaryAccount = !this.getMerchantBankDetails.is_primary;
			const payload = {
				is_primary: primaryAccount,
				bankId,
				id: this.getLoggedUser.id
			};
			this.toggleAccount(payload);
		}
	}
};
</script>

<style scoped>
.form-check-input:checked {
	background-color: #5eba00 !important;
	border-color: rgba(110, 117, 130, 0.2);
}
</style>
