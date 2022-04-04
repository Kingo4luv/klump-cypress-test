import store from '../store/index';
import eventHub from './eventHub';

/**
 * Checks for loggedIn status
 * @returns {Boolean} loggedIn state
 */
export function isLoggedIn() {
	return store.getters.isLoggedIn;
}

/**
 * Auth guard that allows non-authenticated users only.
 * @param to - next route
 * @param from - previous route
 * @param next - callback to transfer control to the next middleware
 */
export function noAuthOnly(to, from, next) {
	if (isLoggedIn()) {
		next('/');
	} else {
		next();
	}
}

/**
 * Auth guard allows authenticated users only.
 * @param to - next route
 * @param from - previous route
 * @param next - callback to transfer control to the next middleware
 */
export function requireAuth(to, from, next) {
	if (isLoggedIn()) {
		next();
	} else {
		next({ name: 'SignIn' });
	}
}

/**
 * Sets a user session and saves it to store
 * @param {Object} user - user data to be saved to session
 */
export function setSession(user) {
	store.commit('setLoggedUser', user);
}

/**
 * clears the current session
 */
export function clearSession() {
	setSession({});
}

/**
 * retrieves the current user session from state
 */
export function getSession() {
	return store.getters.getLoggedUser;
}

/**
 * Calls an action to logout user
 */
export function logoutUser() {
	// call a mutation to logout user
	store.commit('logout');
}

/**
 * restarts the session with
 * @param {Object} data - User data to be initialized in session
 */
export function restartSession(data) {
	eventHub.$session.start();
	eventHub.$session.set('user', data);
	eventHub.$session.set('token', store.getters.getLoggedUser.token);
	eventHub.$session.set('refreshToken', eventHub.loggedUser.refreshToken);
	setSession(data);
	axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
}
