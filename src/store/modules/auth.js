/* eslint no-shadow: ["error", { "allow": ["state"] }]	*/
import api from '../../utils/api';

const state = {
	isLoggedIn: false,
	loggedUser: {},
	loginSuccess: null,
	refreshingToken: false,
	error: '',
	userId: null,
	isValidated: false,
	hasDefaultCard: null,
	isNotAdminErrorMessage: 'Unauthorized access'
};

const getters = {
	getLoggedUser: (state) => state.loggedUser,
	isLoggedIn: (state) => state.isLoggedIn,
	getError: (state) => state.error,
	refreshingToken: (state) => state.refreshingToken,
	getBvnValidation: (state) => state.isValidated,
	getDefaultCardStatus: (state) => state.hasDefaultCard,
	isNotAdminErrorMessage: (state) => state.isNotAdminErrorMessage
};

const mutations = {
	logout: (state) => {
		state.loggedUser = {};
		state.isLoggedIn = false;
	},
	setLoggedUser: (state, user) => {
		state.loggedUser = user;
	},
	loginSuccess: (state, data) => {
		state.loggedUser = data;
		state.isLoggedIn = true;
	},
	updateLoggedUser: (state, data) => {
		state.loggedUser = { ...state.loggedUser, ...data };
	},
	updateTokenStatus: (state, data) => {
		state.refreshingToken = data;
	},
	setUserId: (state, userId = null) => {
		state.userId = userId;
	}
};

const actions = {
	signUp: ({ commit }, payload) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post('merchants', payload)
			.then((response) => {
				if (response.status === 201) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', {
						type: 'success',
						message:
							'Account created successfully. Your account will be verified soon and an email will be sent to you'
					});
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
	signIn: ({ commit }, data) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post('login', data)
			.then((response) => {
				if (response.status === 200 && 'token' in response.data) {
					const user = response.data.data;
					user.token = response.data.token;
					user.refreshToken = response.data.refreshToken;
					commit('loginSuccess', user);
					commit('reqSuccess', null, { root: true });
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
	forgetPassword: ({ commit }, data) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post('auth/password', data)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', { type: 'success', message: response.data.message });
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
	activateAccount: ({ commit }, data) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`auth/verify?code=${data.code}&persona=${data.persona}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
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
	resetPassword: ({ commit }, data) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.get(`auth/code/${data.code}`)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
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
	setNewPassword: ({ commit }, data) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.patch('auth/change-password', data)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					commit('setAlert', { type: 'success', message: response.data.message });
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
