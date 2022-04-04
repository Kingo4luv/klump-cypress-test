/* eslint no-shadow: ["error", { "allow": ["state"] }]	*/
import api from '../../utils/api';

const state = {
	transactionSearchResults: {},
	chargeBackSearchResults: {},
	customerSearchResults: {},
	payoutSearchResults: {}
};
const getters = {
	getTransactionSearchResults: (state) => state.transactionSearchResults,
	getChargeBackSearchResults: (state) => state.chargeBackSearchResults,
	getCustomerSearchResults: (state) => state.customerSearchResults,
	getPayoutSearchResults: (state) => state.payoutSearchResults
};
const mutations = {
	setTransactionSearchResults: (state, searchResults) => {
		state.transactionSearchResults = searchResults;
	},
	setChargeBackSearchResults: (state, searchResults) => {
		state.chargeBackSearchResults = searchResults;
	},
	setCustomerSearchResults: (state, searchResults) => {
		state.customerSearchResults = searchResults;
	},
	setPayoutSearchResults: (state, result) => {
		state.payoutSearchResults = result;
	}
};
const actions = {
	searchTransactions: ({ commit }, { id, query, offset = 0, limit = 10 }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/transactions/search?query=${query}&offset=${offset}&limit=${limit}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setTransactionSearchResults', response.data);
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
	searchChargeBacks: ({ commit }, { id, query, offset = 0, limit = 10 }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/chargebacks/search?query=${query}&offset=${offset}&limit=${limit}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setChargeBackSearchResults', response.data);
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
	searchCustomers: ({ commit }, { id, query, offset = 0, limit = 10 }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/customers/search?query=${query}&offset=${offset}&limit=${limit}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setCustomerSearchResults', response.data);
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
	searchPayouts: ({ commit }, { id, query, offset = 0, limit = 10 }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/payouts/search?query=${query}&offset=${offset}&limit=${limit}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setPayoutSearchResults', response.data);
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
