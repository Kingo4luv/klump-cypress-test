import instance from './axios';

export default {
	get(url) {
		return instance.get(url);
	},
	post(url, data) {
		return instance.post(url, data);
	},
	patch(url, data, config = null) {
		if (config !== null) {
			return instance.patch(url, data, config);
		}
		return instance.patch(url, data);
	},
	delete(url) {
		return instance.delete(url);
	},
	put(url, data) {
		return instance.put(url, data);
	},
	all(arrayOfUrls) {
		return instance.all(arrayOfUrls);
	}
};
