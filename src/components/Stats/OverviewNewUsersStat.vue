<template>
	<div class="col-sm-6 col-lg-3">
		<div class="card">
			<div class="card-body">
				<div class="d-flex align-items-center">
					<div class="subheader mb-3">TOTAL CUSTOMERS</div>
					<div class="ml-auto lh-1">
						<div class="dropdown">
							<p class="text-muted" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Last 24 hours
							</p>
							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item active" href="#">Last 7 days</a>
								<a class="dropdown-item" href="#">Last 30 days</a>
								<a class="dropdown-item" href="#">Last 3 months</a>
							</div>
						</div>
					</div>
				</div>
				<div class="d-flex align-items-baseline">
					<span v-if="getStatus === 'loading'">
						<Loader />
					</span>
					<div v-else id="usersStat" class="h1 mb-3 mr-2">
						{{ last24HrsDistinctCustomers }}
					</div>
					<div class="mr-auto d-none">
						<span id="userPercentage" class="text-green d-inline-flex align-items-center lh-1">
							4%
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon ml-1"
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
				<apexchart type="bar" height="40" :options="chartOptions" class="chart-sm" :series="series" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '@/components/Loader';
export default {
	name: 'OverviewNewUsersStat',
	components: {
		Loader
	},
	data() {
		return {
			series: [
				{
					name: 'series1',
					data: [
						37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46,
						39, 62, 51, 35, 41, 67
					]
				}
			],
			chartOptions: {
				chart: {
					type: 'bar',
					fontFamily: 'inherit',
					height: 40.0,
					sparkline: {
						enabled: true
					},
					animations: {
						enabled: false
					}
				},
				plotOptions: {
					bar: {
						columnWidth: '50%'
					}
				},
				dataLabels: {
					enabled: false
				},
				fill: {
					opacity: 1
				},
				series: [
					{
						name: 'Profits',
						data: [
							37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
							46, 39, 62, 51, 35, 41, 67
						]
					}
				],
				grid: {
					strokeDashArray: 4
				},
				xaxis: {
					labels: {
						padding: 0
					},
					tooltip: {
						enabled: false
					},
					axisBorder: {
						show: false
					},
					type: 'datetime'
				},
				yaxis: {
					labels: {
						padding: 4
					}
				},
				labels: [
					'2020-06-20',
					'2020-06-21',
					'2020-06-22',
					'2020-06-23',
					'2020-06-24',
					'2020-06-25',
					'2020-06-26',
					'2020-06-27',
					'2020-06-28',
					'2020-06-29',
					'2020-06-30',
					'2020-07-01',
					'2020-07-02',
					'2020-07-03',
					'2020-07-04',
					'2020-07-05',
					'2020-07-06',
					'2020-07-07',
					'2020-07-08',
					'2020-07-09',
					'2020-07-10',
					'2020-07-11',
					'2020-07-12',
					'2020-07-13',
					'2020-07-14',
					'2020-07-15',
					'2020-07-16',
					'2020-07-17',
					'2020-07-18',
					'2020-07-19'
				],
				colors: ['#206bc4'],
				legend: {
					show: false
				}
			}
		};
	},
	computed: {
		...mapGetters(['getMerchantDetails', 'getStatus']),
		last24HrsDistinctCustomers() {
			return this.getMerchantDetails &&
				this.getMerchantDetails.last_24hrs_total_distinct_customers &&
				this.getMerchantDetails.last_24hrs_total_distinct_customers.length > 0
				? this.getMerchantDetails.last_24hrs_total_distinct_customers[0].total_customers
				: 0;
		}
	}
};
</script>
