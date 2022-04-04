/* eslint no-shadow: ["error", { "allow": ["state"] }]	*/
import api from '../../utils/api';
import eventHub from '../../utils/eventHub';

const state = {
	merchants: {},
	merchantsWebhooks: [],
	kyc: [],
	merchantCustomers: {},
	merchantCustomer: {},
	customerTransactions: {},
	merchantPayouts: {},
	merchantBankDetails: {},
	merchantBanks: [],
	merchantPaymentPages: {},
	merchantPaymentPageDetails: {}
};
const getters = {
	getMerchantDetails: (state) => state.merchants,
	getMerchantWebhooks: (state) => state.merchantsWebhooks,
	getNewKey: (state) => state.newKey,
	getMerchantKyc: (state) => state.kyc,
	getMerchantCustomers: (state) => state.merchantCustomers,
	getMerchantCustomer: (state) => state.merchantCustomer,
	getCustomerTransactions: (state) => state.customerTransactions,
	getMerchantPayouts: (state) => state.merchantPayouts,
	getMerchantBanks: (state) => state.merchantBanks,
	getMerchantBankDetails: (state) => state.merchantBankDetails,
	getMerchantPaymentPages: (state) => state.merchantPaymentPages,
	getMerchantPaymentPageDetails: (state) => state.merchantPaymentPageDetails
};
const mutations = {
	setMerchantDetails: (state, merchants) => {
		state.merchants = merchants;
	},
	setMerchantWebhooks: (state, data) => {
		state.merchantsWebhooks = data;
	},
	setMerchantKyc: (state, data) => {
		state.kyc = data;
	},
	setMerchantCustomers: (state, data) => {
		state.merchantCustomers = data;
	},
	setMerchantCustomer: (state, data) => {
		state.merchantCustomer = data;
	},
	setCustomerTransactions: (state, data) => {
		state.customerTransactions = data;
	},
	setMerchantPayouts: (state, data) => {
		state.merchantPayouts = data;
	},
	setMerchantBankDetails: (state, data) => {
		state.merchantBankDetails = data;
	},
	setMerchantBanks: (state, data) => {
		state.merchantBanks = data;
	},
	setMerchantPaymentPages: (state, data) => {
		state.merchantPaymentPages = data;
	},
	setMerchantPaymentPageDetails: (state, data) => {
		state.merchantPaymentPageDetails = data;
	}
};
const actions = {
	fetchMerchantDetails: ({ commit }, id) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setMerchantDetails', response.data.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	generateNewKey: ({ commit, dispatch }, data) => {
		const id = data.id;
		delete data.id;
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.patch(`merchants/${id}/credentials`, { environment: data.environment })
			.then((response) => {
				if (response.status === 201) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: 'New key generated successfully.'
					});
					dispatch('fetchMerchantDetails', id);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	fetchMerchantWebhooks: ({ commit }, id) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/webhooks`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setMerchantWebhooks', response.data.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	createWebhook: ({ commit, dispatch }, payload) => {
		const id = payload.id;
		delete payload.id;
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post(`merchants/${id}/webhooks`, payload)
			.then((response) => {
				if (response.status === 201) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: 'Webhook was created successfully.'
					});
					dispatch('fetchMerchantWebhooks', id);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', error.response.data, { root: true });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	fetchMerchantKyc: ({ commit }, id) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/kyc-document`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setMerchantKyc', response.data.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	deleteKycDoc: ({ commit }, payload) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.delete(`merchants/${payload.merchantId}/kyc-document/${payload.id}`)
			.then((response) => {
				if (response.status === 200) {
					eventHub.$emit('refreshMerchantKyc');
					commit('reqSuccess', null, { root: true });
					commit('setAlert', { type: 'success', message: response.data.message });
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				eventHub.$emit('refreshMerchantKyc');
				commit('reqError', null, { root: true });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	fetchMerchantCustomers: ({ commit }, { id, offset = 0, limit = 10 }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/customers?offset=${offset}&limit=${limit}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setMerchantCustomers', response.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	fetchMerchantCustomer: ({ commit }, { id, customerId }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/customers/${customerId}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setMerchantCustomer', response.data.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	fetchCustomerTransactions: ({ commit }, { id, customerId, offset = 0, limit = 10 }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/customers/${customerId}/transactions?offset=${offset}&limit=${limit}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setCustomerTransactions', response.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	fetchMerchantPayouts: ({ commit }, { id, offset = 0, limit = 10 }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/payouts?offset=${offset}&limit=${limit}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setMerchantPayouts', response.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	fetchMerchantBanks: ({ commit }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get('banks')
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setMerchantBanks', response.data.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	addMerchantAccount: ({ commit, dispatch }, { id, payload }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post(`/merchants/${id}/bank`, payload)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: 'account added successfully'
					});
					dispatch('fetchMerchantBankDetails', { id });
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', error.response.data, { root: true });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	addPaymentPage: ({ commit, dispatch }, { id, payload }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post(`/merchants/${id}/payment-pages`, payload)
			.then((response) => {
				if (response.status === 201) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: 'Payment Page Created successfully'
					});
					dispatch('fetchMerchantPaymentPages', { id });
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', error.response.data, { root: true });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	updatePaymentPage: ({ commit }, { merchantId, pageId, payload }) => {
		api.patch(`/merchants/${merchantId}/payment-pages/${pageId}`, payload)
			.then((response) => {
				if (response.status === 200) {
					commit('setAlert', {
						type: 'success',
						message: 'Payment Page Updated successfully'
					});
					commit('setMerchantPaymentPageDetails', response.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', error.response.data, { root: true });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	fetchMerchantPaymentPages: ({ commit }, { id, offset = 0, limit = 10 }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/payment-pages?offset=${offset}&limit=${limit}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setMerchantPaymentPages', response.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	fetchMerchantPaymentPageDetails: ({ commit }, { merchantId, pageId }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${merchantId}/payment-pages/${pageId}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setMerchantPaymentPageDetails', response.data.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	fetchMerchantBankDetails: ({ commit }, { id }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/bank`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setMerchantBankDetails', response.data.data);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	toggleAccount: ({ commit, dispatch }, data) => {
		const id = data.id;
		delete data.id;
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.patch(`merchants/${id}/bank/${data.bankId}`, { is_primary: data.is_primary })
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: response.data.message
					});
					dispatch('fetchMerchantBankDetails', { id });
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	toggleEnvironment: ({ commit, dispatch }, data) => {
		const id = data.id;
		delete data.id;
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.patch(`merchants/${id}`, { is_live: data.is_live })
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: `Your environment is now set to ${data.is_live ? 'Live' : 'Test'}`
					});
					dispatch('fetchMerchantDetails', id);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	updateImage: ({ commit, dispatch }, payload) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.patch(`merchants/${payload.id}/logo`, { file: payload.file })
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: 'Image uploaded successfully'
					});
					dispatch('fetchMerchantDetails', payload.id);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	updateWhoToPayForTransactions: ({ commit, dispatch }, payload) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.patch(`merchants/${payload.id}`, { merchant_pays_commission: payload.status })
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: 'Profile updated successfully'
					});
					dispatch('fetchMerchantDetails', payload.id);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	},
	updateMerchantDetails: ({ commit, dispatch }, data) => {
		const id = data.id;
		delete data.id;
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.patch(`merchants/${id}`, data)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: 'Details updated successfully.'
					});
					dispatch('fetchMerchantDetails', id);
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { message: error.response.data.message });
				commit('setAlert', { type: 'danger', message: error.response.data.message });
				return error;
			});
		return true;
	}
};
export default {
	actions,
	state,
	mutations,
	getters
};
