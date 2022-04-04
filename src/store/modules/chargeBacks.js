/* eslint no-shadow: ["error", { "allow": ["state"] }]	*/
import api from '../../utils/api';

const state = {
	chargeBacks: {},
	chargeBackDetails: {}
};

const getters = {
	getChargeBacks: (state) => state.chargeBacks,
	getChargeBackDetails: (state) => state.chargeBackDetails
};

const mutations = {
	setChargeBacks: (state, data) => {
		state.chargeBacks = data;
	},
	setChargeBackDetails: (state, data) => {
		state.chargeBackDetails = data;
	}
};

const actions = {
	fetchChargeBacks: ({ commit }, { id, offset = 0, limit = 10 }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/chargebacks?offset=${offset}&limit=${limit}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setChargeBacks', response.data);
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
	fetchChargeBackDetails: ({ commit }, { id, customerId }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`merchants/${id}/chargebacks/${customerId}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setChargeBackDetails', response.data.data);
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
	addComment: ({ commit, dispatch }, { id, chargeBackId, payload }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post(`merchants/${id}/chargebacks/${chargeBackId}/comments`, payload)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message: 'Comment added successfully'
					});
					dispatch('fetchChargeBackDetails', { id, customerId: chargeBackId });
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
	}
};

export default {
	actions,
	state,
	mutations,
	getters
};
