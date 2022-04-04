/* eslint no-shadow: ["error", { "allow": ["state"] }]	*/
import api from '../../utils/api';

const state = {
	industries: [],
	totalIndustries: 0
};

const getters = {
	getIndustries: (state) => state.industries,
	getTotalIndustries: (state) => state.totalIndustries
};

const mutations = {
	setIndustries: (state, industries) => {
		state.industries = industries;
	},
	setTotalIndustries: (state, total) => {
		state.totalIndustries = total;
	}
};

const actions = {
	fetchIndustries: ({ commit }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get('industries')
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setIndustries', response.data.data);
					commit('setTotalIndustries', response.data.total);
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
