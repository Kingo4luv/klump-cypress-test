<template>
	<div class="page">
		<div class="content">
			<div class="container-xl">
				<section v-if="getStatus === 'loading'" class="box">
					<div>
						<div class="card">
							<div class="table-responsive">
								<table class="table table-vcenter table-mobile-md card-table">
									<thead>
										<tr>
											<th class="w-50">Name</th>
											<th class="w-50">Contact</th>
											<th />
										</tr>
									</thead>
								</table>
								<div class="p-2">
									<Loader />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section v-else>
					<CustomersTable v-if="getMerchantCustomers.total > 0" :customers="getMerchantCustomers" />
					<div v-else class="container-xl mt-6">
						<div class="box">
							<div class="card center">
								<p class="p-2 pt-4 pb-2 text-center font-weight-bold">You have no customers yet.</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CustomersTable from './CustomersTable';
import Loader from '@/components/Loader';

export default {
	components: {
		CustomersTable,
		Loader
	},
	computed: {
		...mapGetters(['getMerchantCustomers', 'getLoggedUser', 'getStatus'])
	},
	watch: {
		$route({ query }) {
			if (query.offset && query.limit) {
				this.fetchMerchantCustomers({
					id: this.getLoggedUser.id,
					offset: query.offset,
					limit: query.limit
				});
			} else {
				this.fetchMerchantCustomers({
					id: this.getLoggedUser.id
				});
			}
		}
	},
	created() {
		this.fetchMerchantCustomersMethod(this.getLoggedUser.id);
	},
	methods: {
		...mapActions(['fetchMerchantCustomers']),
		fetchMerchantCustomersMethod(id) {
			const query = this.$route.query.offset && this.$route.query.limit ? this.$route.query : null;
			if (query) {
				this.fetchMerchantCustomers({
					id,
					offset: query.offset,
					limit: query.limit
				});
			} else {
				this.fetchMerchantCustomers({ id });
			}
		}
	}
};
</script>
