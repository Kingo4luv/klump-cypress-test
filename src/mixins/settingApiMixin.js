import { mapActions } from 'vuex';
import copy from 'copy-to-clipboard';

const settingApiMixin = {
	data() {
		return {
			isEdited: false,
			hideSecretKey: true,
			isCopied: false,
			createWebhookButtonIsClicked: false
		};
	},
	computed: {
		isValidUrl() {
			if (this.createWebhookButtonIsClicked) {
				const regex =
					/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
				return regex.test(this.webhook.url);
			} else {
				return false;
			}
		}
	},
	methods: {
		...mapActions(['createWebhook']),
		copyToClipboard(val) {
			copy(val, {
				debug: true,
				format: 'text/plain',
				message: 'Hello',
				onCopy: () => {
					this.isCopied = true;
				}
			});
			setTimeout(() => {
				this.isCopied = false;
			}, 1000);
		},
		handleCreateWebhook(val) {
			this.createWebhookButtonIsClicked = true;
			this.isEdited = !this.isEdited;
			if (!this.isEdited && this.isValidUrl) {
				this.createWebhook({
					type: val ? 'live' : 'test',
					url: this.webhook.url,
					id: this.getLoggedUser.id
				});
			}
		}
	}
};
export default settingApiMixin;
