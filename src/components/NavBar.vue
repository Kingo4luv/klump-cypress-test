<template>
	<div class="navbar-expand-md">
		<div id="navbar-menu" class="collapse navbar-collapse">
			<div class="navbar navbar-light block">
				<div class="container-xl">
					<ul class="navbar-nav">
						<li :class="[routeName.includes('home') ? 'active' : '', 'nav-item']">
							<router-link to="/" class="nav-link">
								<span class="nav-link-icon d-md-none d-lg-inline-block"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon"
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
										<polyline points="5 12 3 12 12 3 21 12 19 12" />
										<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
										<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
									</svg>
								</span>
								<span class="nav-link-title"> Home </span>
							</router-link>
						</li>
						<li :class="[routeName.includes('transaction') ? 'active' : '', 'nav-item']">
							<router-link to="/transactions" class="nav-link">
								<span class="nav-link-icon d-md-none d-lg-inline-block"
									><svg
										width="24"
										height="24"
										viewBox="0 0 12 11"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="icon"
									>
										<path
											:opacity="routeName.includes('transaction') ? '1' : '0.5'"
											d="M11 3.5L1 3.5M11 1.625L11 8.5C11 8.83152 10.8683 9.14946 10.6339 9.38388C10.3995 9.6183 10.0815 9.75 9.75 9.75L2.25 9.75C1.91848 9.75 1.60054 9.6183 1.36612 9.38388C1.1317 9.14946 1 8.83152 1 8.5L1 1.625C1 1.45924 1.06585 1.30027 1.18306 1.18306C1.30027 1.06585 1.45924 1 1.625 1L10.375 1C10.5408 1 10.6997 1.06585 10.8169 1.18306C10.9342 1.30027 11 1.45924 11 1.625Z"
											stroke="#283243"
											stroke-width="1.2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								<span class="nav-link-title"> Transactions </span>
							</router-link>
						</li>
						<li
							:class="[
								routeName.includes('customers') || routeName.includes('customer_details')
									? 'active'
									: '',
								'nav-item'
							]"
						>
							<router-link to="/customers" class="nav-link">
								<span class="nav-link-icon d-md-none d-lg-inline-block"
									><svg
										width="24"
										height="24"
										viewBox="0 0 6 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="icon"
									>
										<g :opacity="routeName.includes('customers') ? '1' : '0.5'">
											<path
												d="M3.05275 3.73684C3.80851 3.73684 4.42117 3.12418 4.42117 2.36842C4.42117 1.61266 3.80851 1 3.05275 1C2.29699 1 1.68433 1.61266 1.68433 2.36842C1.68433 3.12418 2.29699 3.73684 3.05275 3.73684Z"
												stroke="#283243"
												stroke-width="1.2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M1.68421 13.9999V10.5789L1 9.89469V7.15784C1 6.97638 1.07209 6.80235 1.2004 6.67403C1.32872 6.54572 1.50275 6.47363 1.68421 6.47363H4.42105C4.60252 6.47363 4.77655 6.54572 4.90486 6.67403C5.03318 6.80235 5.10526 6.97638 5.10526 7.15784V9.89469L4.42105 10.5789V13.9999"
												stroke="#283243"
												stroke-width="1.2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</g>
									</svg>
								</span>
								<span class="nav-link-title"> Customers </span>
							</router-link>
						</li>
						<li :class="[routeName.includes('payouts') ? 'active' : '', 'nav-item']">
							<router-link to="/payouts" class="nav-link">
								<span class="nav-link-icon d-md-none d-lg-inline-block"
									><svg
										width="24"
										height="24"
										viewBox="0 0 7 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="icon"
									>
										<g :opacity="routeName.includes('payouts') ? '1' : '0.5'">
											<path
												d="M3.66663 1V9"
												stroke="#283243"
												stroke-width="1.2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M6.33329 6.3335L3.66663 9.00016"
												stroke="#283243"
												stroke-width="1.2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M1 6.3335L3.66667 9.00016"
												stroke="#283243"
												stroke-width="1.2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M3.66671 13.0002C4.40309 13.0002 5.00004 12.4032 5.00004 11.6668C5.00004 10.9304 4.40309 10.3335 3.66671 10.3335C2.93033 10.3335 2.33337 10.9304 2.33337 11.6668C2.33337 12.4032 2.93033 13.0002 3.66671 13.0002Z"
												fill="#283243"
											/>
										</g>
									</svg>
								</span>
								<span class="nav-link-title">Payouts</span>
							</router-link>
						</li>
						<li
							v-if="showOnProduction"
							:class="[
								routeName.includes('payments') || routeName.includes('payment_details') ? 'active' : '',
								'nav-item'
							]"
						>
							<router-link to="/payments" class="nav-link">
								<span class="nav-link-icon d-md-none d-lg-inline-block"
									><svg
										class="icon"
										xmlns="http://www.w3.org/2000/svg"
										width="10"
										height="10"
										viewBox="0 0 10 10"
										fill="none"
									>
										<path
											:opacity="
												routeName.includes('payments') || routeName.includes('payment_details')
													? '1'
													: '0.5'
											"
											d="M4 0L7.649 1.14C7.75077 1.17177 7.83972 1.23524 7.90287 1.32114C7.96601 1.40705 8.00005 1.51089 8 1.6175V2.5H9C9.13261 2.5 9.25979 2.55268 9.35355 2.64645C9.44732 2.74021 9.5 2.86739 9.5 3V7C9.5 7.13261 9.44732 7.25979 9.35355 7.35355C9.25979 7.44732 9.13261 7.5 9 7.5L7.39 7.5005C7.1965 7.7555 6.9615 7.9805 6.69 8.1655L4 10L1.31 8.166C0.906261 7.89073 0.575876 7.521 0.34757 7.08896C0.119264 6.65692 -5.06114e-05 6.17565 1.61049e-08 5.687V1.6175C6.03031e-05 1.51097 0.0341433 1.40725 0.0972811 1.32144C0.160419 1.23564 0.249311 1.17225 0.351 1.1405L4 0ZM4 1.047L1 1.985V5.687C0.999928 5.99311 1.07012 6.29516 1.20518 6.56987C1.34024 6.84458 1.53655 7.08462 1.779 7.2715L1.8735 7.3395L4 8.79L5.891 7.5H3.5C3.36739 7.5 3.24021 7.44732 3.14645 7.35355C3.05268 7.25979 3 7.13261 3 7V3C3 2.86739 3.05268 2.74021 3.14645 2.64645C3.24021 2.55268 3.36739 2.5 3.5 2.5H7V1.985L4 1.047ZM4 5V6.5H8.5V5H4ZM4 4H8.5V3.5H4V4Z"
											fill="#283243"
										/>
									</svg>
								</span>
								<span class="nav-link-title"> Payment Pages </span>
							</router-link>
						</li>
						<li
							:class="[
								routeName.includes('charges') || routeName.includes('charge_details') ? 'active' : '',
								'nav-item'
							]"
						>
							<router-link to="/charges" class="nav-link">
								<span class="nav-link-icon d-md-none d-lg-inline-block">
									<svg
										class="icon"
										width="12"
										height="10"
										viewBox="0 0 12 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											:opacity="
												routeName.includes('charges') || routeName.includes('charge_details')
													? '1'
													: '0.5'
											"
											d="M1.11111 1.11111V8.88889H10V1.11111H1.11111ZM0.555556 0H10.5556C10.7029 0 10.8442 0.0585316 10.9484 0.162718C11.0526 0.266905 11.1111 0.408213 11.1111 0.555556V9.44444C11.1111 9.59179 11.0526 9.7331 10.9484 9.83728C10.8442 9.94147 10.7029 10 10.5556 10H0.555556C0.408213 10 0.266905 9.94147 0.162718 9.83728C0.0585316 9.7331 0 9.59179 0 9.44444V0.555556C0 0.408213 0.0585316 0.266905 0.162718 0.162718C0.266905 0.0585316 0.408213 0 0.555556 0ZM5.55556 3.33333V1.66667L8.33333 4.44444H3.33333V3.33333H5.55556ZM2.77778 5.55556H7.77778V6.66667H5.55556V8.33333L2.77778 5.55556Z"
											fill="black"
										/>
									</svg>
								</span>
								<span class="nav-link-title"> Charge Back </span>
							</router-link>
						</li>
						<li :class="[routeName.includes('settings') ? 'active' : '', 'nav-item']">
							<router-link to="/settings" class="nav-link">
								<span class="nav-link-icon d-md-none d-lg-inline-block"
									><svg
										width="10"
										height="10"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="icon"
									>
										<path
											:opacity="routeName.includes('settings') ? '1' : '0.5'"
											d="M0.107817 6.02972C-0.0359391 5.35077 -0.0359391 4.64923 0.107817 3.97028C0.662668 4.03526 1.14754 3.85181 1.30549 3.46991C1.46395 3.08751 1.25151 2.61514 0.812627 2.26873C1.19105 1.68705 1.68705 1.19105 2.26873 0.812627C2.61464 1.25101 3.08751 1.46395 3.46991 1.30549C3.85231 1.14704 4.03576 0.662668 3.97028 0.107817C4.64923 -0.0359391 5.35077 -0.0359391 6.02972 0.107817C5.96474 0.662668 6.14819 1.14754 6.53009 1.30549C6.91248 1.46395 7.38486 1.25151 7.73126 0.812627C8.31294 1.19105 8.80896 1.68705 9.18737 2.26873C8.74899 2.61464 8.53605 3.08751 8.69451 3.46991C8.85296 3.85231 9.33733 4.03576 9.89218 3.97028C10.0359 4.64923 10.0359 5.35077 9.89218 6.02972C9.33733 5.96474 8.85246 6.14819 8.69451 6.53009C8.53605 6.91248 8.74849 7.38486 9.18737 7.73126C8.80896 8.31294 8.31294 8.80896 7.73126 9.18737C7.38536 8.74899 6.91248 8.53605 6.53009 8.69451C6.14769 8.85296 5.96424 9.33733 6.02972 9.89218C5.35077 10.0359 4.64923 10.0359 3.97028 9.89218C4.03526 9.33733 3.85181 8.85246 3.46991 8.69451C3.08751 8.53605 2.61514 8.74849 2.26873 9.18737C1.68705 8.80896 1.19105 8.31294 0.812627 7.73126C1.25101 7.38536 1.46395 6.91248 1.30549 6.53009C1.14704 6.14769 0.662668 5.96424 0.107817 6.02972ZM1.00108 5.10497C1.55093 5.25743 2.00431 5.60584 2.22925 6.14769C2.45369 6.69004 2.37921 7.25739 2.09828 7.75326C2.14627 7.80424 2.19575 7.85373 2.24674 7.90172C2.74311 7.62079 3.30995 7.54681 3.85231 7.77075C4.39416 7.99569 4.74257 8.44907 4.89503 8.99892C4.96501 9.00092 5.03499 9.00092 5.10497 8.99892C5.25743 8.44907 5.60584 7.99569 6.14769 7.77075C6.69004 7.54631 7.25739 7.62079 7.75326 7.90172C7.80424 7.85373 7.85373 7.80424 7.90172 7.75326C7.62079 7.25689 7.54681 6.69004 7.77075 6.14769C7.99569 5.60584 8.44907 5.25743 8.99892 5.10497C9.00092 5.03499 9.00092 4.96501 8.99892 4.89503C8.44907 4.74257 7.99569 4.39416 7.77075 3.85231C7.54631 3.30995 7.62079 2.74261 7.90172 2.24674C7.85355 2.19595 7.80405 2.14645 7.75326 2.09828C7.25689 2.37921 6.69004 2.45319 6.14769 2.22925C5.60584 2.00431 5.25743 1.55093 5.10497 1.00108C5.035 0.999224 4.965 0.999224 4.89503 1.00108C4.74257 1.55093 4.39416 2.00431 3.85231 2.22925C3.30995 2.45369 2.74261 2.37921 2.24674 2.09828C2.19575 2.14627 2.14627 2.19575 2.09828 2.24674C2.37921 2.74311 2.45319 3.30995 2.22925 3.85231C2.00431 4.39416 1.55093 4.74257 1.00108 4.89503C0.999077 4.96501 0.999077 5.03499 1.00108 5.10497ZM5 6.4996C4.60228 6.4996 4.22085 6.3416 3.93962 6.06037C3.6584 5.77915 3.5004 5.39772 3.5004 5C3.5004 4.60228 3.6584 4.22085 3.93962 3.93962C4.22085 3.6584 4.60228 3.5004 5 3.5004C5.39772 3.5004 5.77915 3.6584 6.06037 3.93962C6.3416 4.22085 6.4996 4.60228 6.4996 5C6.4996 5.39772 6.3416 5.77915 6.06037 6.06037C5.77915 6.3416 5.39772 6.4996 5 6.4996ZM5 5.49987C5.13257 5.49987 5.25971 5.4472 5.35346 5.35346C5.4472 5.25971 5.49987 5.13257 5.49987 5C5.49987 4.86743 5.4472 4.74028 5.35346 4.64654C5.25971 4.5528 5.13257 4.50013 5 4.50013C4.86743 4.50013 4.74028 4.5528 4.64654 4.64654C4.5528 4.74028 4.50013 4.86743 4.50013 5C4.50013 5.13257 4.5528 5.25971 4.64654 5.35346C4.74028 5.4472 4.86743 5.49987 5 5.49987Z"
											fill="#283243"
										/>
									</svg>
								</span>
								<span class="nav-link-title"> Settings </span>
							</router-link>
						</li>
						<li :class="[routeName.includes('go-to-docs') ? 'active' : '', 'nav-item']">
							<a href="https://docs.useklump.com/docs" class="nav-link" target="_blank">
								<span class="nav-link-icon d-md-none d-lg-inline-block">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="currentColor"
										class="icon"
										viewBox="0 0 16 16"
									>
										<path
											d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
										/>
										<path
											d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
										/>
									</svg>
								</span>
								<span class="nav-link-title"> Go to Docs </span>
							</a>
						</li>
					</ul>
					<div v-if="canSearch" class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
						<form @submit.prevent="handleSearch">
							<div class="input-icon">
								<span class="input-icon-addon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon"
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
										<circle cx="10" cy="10" r="7" />
										<line x1="21" y1="21" x2="15" y2="15" />
									</svg>
								</span>
								<input
									v-model="query"
									type="text"
									class="form-control"
									:placeholder="searchPlaceholder"
								/>
							</div>
						</form>
						<small v-if="validateSearch && isSearch" class="text-danger">
							{{ validationSearchError || getAlert.message }}
						</small>
					</div>
				</div>
			</div>
		</div>
		<TestAlert v-if="!getMerchantDetails.is_live" />
		<Prompt v-if="promptData.showPrompt" :prompt-data="promptData" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TestAlert from '../components/TestAlert';
import Prompt from '../components/Prompt';
export default {
	name: 'NavBar',
	components: {
		TestAlert,
		Prompt
	},
	data() {
		return {
			query: '',
			isSearch: false,
			searchableRoutes: [
				'transaction',
				'customers',
				'charges',
				'transaction_search',
				'customer_search',
				'charge_back_search',
				'payouts',
				'payout_search'
			],
			offset: 0,
			limit: 10
		};
	},
	computed: {
		...mapGetters(['getStatus', 'getAlert', 'getLoggedUser', 'getMerchantDetails']),
		routeName() {
			return this.$route.name;
		},
		validateSearch() {
			return this.query.length < 3;
		},
		validationSearchError() {
			if (this.routeName.startsWith('customers')) {
				return 'search text must be more than payouts characters';
			} else if (this.routeName.startsWith('payout')) {
				return 'payout reference must be more than two characters';
			} else if (this.routeName.startsWith('charge')) {
				return 'charge back reference must be more than two characters';
			} else {
				return 'transaction reference must be more than two characters';
			}
		},
		searchPlaceholder() {
			let placeholder = '';
			if (this.routeName.startsWith('transaction')) {
				placeholder = 'Enter Transaction Reference';
			}
			if (this.routeName.startsWith('customer')) {
				placeholder = 'Enter customer name';
			}
			if (this.routeName.startsWith('charge')) {
				placeholder = 'Enter Charge Back Reference';
			}
			if (this.routeName.startsWith('payout') || this.routeName.startsWith('payout_search')) {
				placeholder = 'Enter Payout Reference';
			}
			return placeholder;
		},
		canSearch() {
			return this.searchableRoutes.includes(this.$route.name);
		},
		promptData() {
			const promptsArray = [
				{
					message: 'You have not uploaded your KYC documents yet',
					status: this.getMerchantDetails?.kyc_documents?.length < 1,
					url: '/settings?tab=compliance'
				},
				{
					message: 'You have not setup a webhook yet,',
					status: this.getMerchantDetails?.webhook?.length < 1,
					url: '/settings?tab=api'
				},
				{
					message: 'You have not added a bank account for settlement,',
					status: this.getMerchantDetails?.bank_account?.length < 1,
					url: '/settings?tab=payout'
				},
				{
					message: 'You have an untreated chargeback,',
					status: this.getMerchantDetails?.chargebacks?.length > 1,
					url: '/charges'
				},
				{
					message: 'You are yet to setup your support contact details - email and phone number, please,',
					status: this.getMerchantDetails?.dispute_email === null,
					url: '/settings?tab=compliance'
				}
			];
			const validPrompts = promptsArray.filter((prompt) => prompt.status === true);
			const showPrompt = validPrompts.length > 0;
			return { showPrompt, prompt: validPrompts[0] };
		},
		showOnProduction() {
			return process.env.VUE_APP_NODE_ENV !== 'production';
		}
	},
	watch: {
		query(val) {
			if (val) {
				this.isSearch = true;
			}
		},
		getStatus(val) {
			if (val === 'success' && this.isSearch) {
				this.$router.push(this.getSearchRoute(this.query));
			}
		},
		$route({ query }) {
			if (query.offset && query.limit) {
				this.offset = query.offset;
				this.limit = query.limit;
			}
		}
	},
	methods: {
		...mapActions(['searchTransactions', 'searchCustomers', 'searchChargeBacks', 'searchPayouts']),
		handleSearch() {
			if (this.query.length < 3) {
				return;
			}
			if (this.routeName.startsWith('transaction')) {
				this.searchTransactions({
					id: this.getLoggedUser.id,
					query: this.query,
					offset: this.offset,
					limit: this.limit
				});
			}
			if (this.routeName.startsWith('customer')) {
				this.searchCustomers({ id: this.getLoggedUser.id, query: this.query });
			}
			if (this.routeName.startsWith('charges')) {
				this.searchChargeBacks({ id: this.getLoggedUser.id, query: this.query });
			}
			if (this.routeName.startsWith('charge_back_search')) {
				this.searchChargeBacks({ id: this.getLoggedUser.id, query: this.query });
			}
			if (this.routeName.startsWith('payout') || this.routeName.startsWith('payout_search')) {
				this.searchPayouts({ id: this.getLoggedUser.id, query: this.query });
			}
		},
		getSearchRoute(query) {
			let route = null;
			if (this.routeName.startsWith('transaction')) {
				route = `/transactions/search?query=${query}`;
			}
			if (this.routeName.startsWith('customer')) {
				route = `/customers/search?query=${query}`;
			}
			if (this.routeName.startsWith('charges')) {
				route = `/charges/search?query=${query}`;
			}
			if (this.routeName.startsWith('charge_back_search')) {
				route = `/charges/search?query=${query}`;
			}
			if (this.routeName.startsWith('payout') || this.routeName.startsWith('payout_search')) {
				route = `/payouts/search?query=${query}`;
			}
			return route;
		}
	}
};
</script>

<style scoped>
.dropdown-toggle::after {
	border-top: 0em;
	border-right: 0em;
}
</style>
