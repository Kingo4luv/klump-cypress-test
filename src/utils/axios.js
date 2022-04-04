import axios from 'axios';
import store from '../store';
import router from '../router';

const instance = axios.create({
	baseURL: `${process.env.VUE_APP_API_URL}`,
	crossdomain: true,
	headers: {
		'Client-Id': `${process.env.VUE_APP_CLIENT_ID}`,
		'Client-Key': `${process.env.VUE_APP_CLIENT_KEY}`,
		'Client-Secret': `${process.env.VUE_APP_CLIENT_SECRET}`
	}
});

instance.all = function all(promises) {
	return axios.all(promises);
};

instance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.code === 'ECONNABORTED') {
			return Promise.reject(error);
		}
		if (error.response.status === 403) {
			return Promise.reject(error);
		}
		if (error.response.status === 401) {
			store.commit('logout');
			router.push('/sign-in');
		}
		return Promise.reject(error);
	}
);

instance.interceptors.request.use((config) => {
	return {
		...config,
		onDownloadProgress: config.onDownloadProgress
	};
});

export default instance;
