/* eslint no-shadow: ["error", { "allow": ["state"] }]	*/
import api from '../../utils/api';

const state = {
	countries: [],
	totalCountries: 0
};

const getters = {
	getCountries: (state) => state.countries,
	getTotalCountries: (state) => state.totalCountries
};

const mutations = {
	setCountries: (state, countries) => {
		state.countries = countries;
	},
	setTotalCountries: (state, total) => {
		state.totalCountries = total;
	}
};

const actions = {
	fetchCountries: ({ commit }) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get('countries')
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setCountries', response.data.data);
					commit('setTotalCountries', response.data.total);
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
