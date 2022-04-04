<template>
	<div class="col-sm-6 col-lg-3">
		<div class="card">
			<div class="card-body">
				<div class="d-flex align-items-center">
					<div class="subheader mb-3">Sales</div>
					<div class="ml-auto lh-1">
						<div class="dropdown">
							<p
								:class="false ? dropdown - toggle : ''"
								class="text-muted"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Last 24 hours
							</p>
							<div class="dropdown-menu dropdown-menu-right hidden">
								<a class="dropdown-item active" href="#">Last 7 days</a>
								<a class="dropdown-item" href="#">Last 30 days</a>
								<a class="dropdown-item" href="#">Last 3 months</a>
							</div>
						</div>
					</div>
				</div>
				<span v-if="getStatus === 'loading'">
					<Loader />
				</span>
				<div v-else id="salesStat" class="h1 mb-3">
					{{ last24HrsTransactions }}
				</div>
				<div class="d-flex mb-2 hidden">
					<div>Sales Count</div>
					<div class="ml-auto">
						<span v-if="getStatus === 'loading'">
							<Loader />
						</span>
						<span
							v-else
							id="salesConversionPercentage"
							class="text-green d-inline-flex align-items-center lh-1"
						>
							{{ last24HrsTransactions }}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon ml-1 d-none"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" />
								<polyline points="3 17 9 11 13 15 21 7" />
								<polyline points="14 7 21 7 21 14" />
							</svg>
						</span>
					</div>
				</div>
				<div class="progress progress-sm">
					<div
						class="progress-bar bg-blue"
						style="width: 75%"
						role="progressbar"
						aria-valuenow="75"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<span class="sr-only">75% Complete</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '@/components/Loader';
export default {
	name: 'OverviewSalesStat',
	components: {
		Loader
	},
	computed: {
		...mapGetters(['getMerchantDetails', 'getStatus']),
		last24HrsTransactions() {
			return this.getMerchantDetails &&
				this.getMerchantDetails.last_24hrs_total_transactions &&
				this.getMerchantDetails.last_24hrs_total_transactions.length > 0
				? this.getMerchantDetails.last_24hrs_total_transactions[0].count
				: 0;
		}
	}
};
</script>
