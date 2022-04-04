<template>
	<div id="tabs-general-ex1" class="tab-pane">
		<div class="row row-sm align-items-center pt-2">
			<div class="col">
				<p class="label-text mt-0" style="color: #5c5c5c; font-size: 14px; line-height: 19px">
					Who should pay the transaction fees?
				</p>
			</div>
			<div class="col">
				<form>
					<div class="">
						<label>
							<input
								v-model="charge"
								type="radio"
								name="charge"
								value="false"
								@click="updateWhoToCharge"
							/>
							<span class="label-text mb-2" style="color: #5c5c5c; font-size: 14px; line-height: 19px">
								Make customers pay the transaction fees
							</span>
						</label>
						<label class="mt-2">
							<input
								v-model="charge"
								type="radio"
								name="charge"
								value="true"
								@click="updateWhoToCharge"
							/>
							<span class="label-text mb-2" style="color: #5c5c5c; font-size: 14px; line-height: 19px">
								Charge me for the transaction fees
							</span>
						</label>
					</div>
				</form>
			</div>
			<div class="col" />
			<div class="col" />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'SettingGeneral',
	data() {
		return {
			charge: false
		};
	},
	computed: {
		...mapGetters(['getMerchantDetails'])
	},
	created() {
		this.charge = this.getMerchantDetails.merchant_pays_commission;
	},
	methods: {
		...mapActions(['updateWhoToPayForTransactions']),
		updateWhoToCharge() {
			const val = !this.charge;
			this.updateWhoToPayForTransactions({
				status: val,
				id: this.getMerchantDetails.id
			});
			this.charge = val;
			return true;
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
}
</style>
