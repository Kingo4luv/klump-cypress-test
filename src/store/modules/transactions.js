/* eslint no-shadow: ["error", { "allow": ["state"] }]	*/
import api from '../../utils/api';

const state = {
	transactions: {},
	transaction: null
};

const getters = {
	getTransactions: (state) => state.transactions,
	getTransaction: (state) => state.transaction
};

const mutations = {
	setTransactions: (state, transactions) => {
		state.transactions = transactions;
	},
	setTransaction: (state, currentTransaction) => {
		state.transaction = currentTransaction;
	}
};

const actions = {
	fetchTransactions: ({ commit }, { id, offset = 0, limit = 10 }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/transactions?offset=${offset}&limit=${limit}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setTransactions', response.data);
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
	fetchTransaction: ({ commit }, data) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${data.id}/transactions/${data.transactionId}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setTransaction', response.data.data);
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
	blackListCustomer: ({ commit, dispatch }, { id, transactionId, user_id, isCalledFrom }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post(`merchants/${id}/blacklist-customer`, { user_id })
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: 'Customer is successfully blacklisted.'
					});
					const payload = {
						id,
						transactionId
					};
					if (isCalledFrom === 'transactionDetails') {
						dispatch('fetchTransaction', payload);
					}
					if (isCalledFrom === 'customerDetails') {
						payload.customerId = user_id;
						dispatch('fetchMerchantCustomer', payload);
					}
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
	unBlackListCustomer: ({ commit, dispatch }, data) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.delete(`merchants/${data.merchantId}/blacklist-customer/${data.customerId}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: response.data.message
					});
					const payload = {
						id: data.merchantId,
						transactionId: data.transactionId
					};
					if (data.isCalledFrom === 'transactionDetails') {
						dispatch('fetchTransaction', payload);
					}
					if (data.isCalledFrom === 'customerDetails') {
						payload.customerId = data.customerId;
						dispatch('fetchMerchantCustomer', payload);
					}
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
