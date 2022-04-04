<template>
	<div class="page">
		<div class="content pb-0 mb-0">
			<div class="container-xl">
				<div class="card">
					<div class="card-body p-0 m-0">
						<ul class="nav nav-tabs" data-toggle="tabs">
							<li>
								<a
									ref="profileTab"
									href="#tabs-profile-ex1"
									class="form-selectgroup-label p-3 pr-4"
									:class="[
										activeTab === 'Profile'
											? 'tab-settings border-bottom-0 border-top-0'
											: 'border-0 tab-settings-inactive'
									]"
									style="
										border-top-right-radius: 0px;
										border-bottom-left-radius: 0px;
										border-bottom-right-radius: 0px;
										border-left: none;
									"
									data-toggle="tab"
									@click="handleActiveTab('Profile')"
									>Profile</a
								>
							</li>
							<li class="d-none">
								<a
									ref="generalTab"
									href="#tabs-general-ex1"
									class="form-selectgroup-label p-3 pr-4"
									:class="[
										activeTab === 'General'
											? 'tab-settings border-bottom-0 border-top-0'
											: 'border-0 tab-settings-inactive'
									]"
									style="
										border-top-right-radius: 0px;
										border-bottom-left-radius: 0px;
										border-bottom-right-radius: 0px;
										border-left: none;
									"
									data-toggle="tab"
									@click="handleActiveTab('General')"
									>General</a
								>
							</li>
							<li class="">
								<a
									ref="complianceTab"
									href="#tabs-compliance-ex1"
									class="form-selectgroup-label p-3 pr-4"
									:class="[
										activeTab === 'Compliance' ? 'tab-settings' : 'border-0 tab-settings-inactive'
									]"
									style="border-radius: 0px; border-top: none; border-bottom: none"
									data-toggle="tab"
									@click="handleActiveTab('Compliance')"
									>Compliance</a
								>
							</li>
							<li class="">
								<a
									ref="payoutTab"
									href="#tabs-payout-ex1"
									class="form-selectgroup-label p-3 pr-4"
									:class="[
										activeTab === 'Payout' ? 'tab-settings' : 'border-0 tab-settings-inactive'
									]"
									style="border-radius: 0px; border-top: none; border-bottom: none"
									data-toggle="tab"
									@click="handleActiveTab('Payout')"
									>Payout Accounts</a
								>
							</li>
							<li class="d-none">
								<a
									ref="teamTab"
									href="#tabs-team-ex1"
									class="form-selectgroup-label p-3 pr-4"
									:class="[activeTab === 'Team' ? 'tab-settings' : 'border-0 tab-settings-inactive']"
									style="border-radius: 0px; border-top: none; border-bottom: none"
									data-toggle="tab"
									@click="handleActiveTab('Team')"
									>Team</a
								>
							</li>
							<li class="">
								<a
									ref="apiTab"
									href="#tabs-api-ex1"
									class="form-selectgroup-label p-3 pr-4"
									:class="[activeTab === 'Api' ? 'tab-settings' : 'border-0 tab-settings-inactive']"
									style="border-radius: 0px; border-top: none; border-bottom: none"
									data-toggle="tab"
									@click="handleActiveTab('Api')"
									>API Keys & Webhooks</a
								>
							</li>
						</ul>
						<div class="tab-content">
							<SettingProfile class="pt-4 p-4" />

							<SettingGeneral class="pt-4 p-4" />

							<SettingCompliance
								class="pt-4 p-4"
								@emitIsEdited="handleEmitIsEditedValue"
								@merchantDetails="handleUpdateMerchantDetails"
							/>

							<SettingPayout class="m-0 p-0" />

							<SettingTeam class="m-0 p-0" />

							<SettingApiLive
								class="pt-4 p-4"
								:merchant-details="getMerchantDetailCredentials"
								:live-webhook="getLiveMerchantWebhook"
								:test-webhook="getTestMerchantWebhook"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<SettingCompliance2
			v-if="activeTab === 'Compliance'"
			:key="complianceKey"
			:is-edited="isEdited"
			@openPreviewModal="previewKycDoc($event)"
			@openConfirmationModal="confirmKyc($event)"
			@reRender="incrementKey"
			@merchantDetails="handleMerchantDetails"
		/>
		<SettingApiTest
			v-if="activeTab === 'Api' && show"
			:merchant-details="getTestMerchantDetails"
			:webhook="getTestMerchantWebhook"
		/>
		<DocumentPreview v-if="kycDoc !== null && documentPreview" :kyc="kycDoc" @closeDocumentPreview="closePreview" />
		<ConfirmationModal
			v-if="kycDoc !== null"
			:modal-payload="kycDoc"
			:modal-id="`modal-delete-kyc`"
			:message="`Do you want to delete this KYC?`"
		/>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SettingProfile from './SettingProfile';
import SettingCompliance from './SettingCompliance';
import SettingCompliance2 from './SettingCompliance2';
import SettingPayout from './SettingPayout';
import SettingTeam from './SettingTeam';
import SettingApiTest from './SettingApiTest';
import SettingApiLive from './SettingApiLive';
import DocumentPreview from './DocumentPreview';
import ConfirmationModal from '../ConfirmationModal';
import SettingGeneral from './SettingGeneral';

export default {
	name: 'SettingDetails',
	components: {
		DocumentPreview,
		SettingProfile,
		SettingCompliance,
		SettingCompliance2,
		SettingPayout,
		SettingTeam,
		SettingApiLive,
		SettingApiTest,
		ConfirmationModal,
		SettingGeneral
	},
	data() {
		return {
			activeTab: 'Profile',
			isEdited: false,
			kycDoc: null,
			loading: false,
			documentPreview: false,
			complianceKey: 0,
			show: false,
			payload: {},
			staff: ''
		};
	},
	computed: {
		...mapGetters(['getMerchantDetails', 'getMerchantWebhooks', 'getLoggedUser', 'getMerchantKyc']),
		getLiveMerchantDetails() {
			return this.getMerchantDetails && this.getMerchantDetails.credential
				? this.getMerchantDetails.credential.filter((detail) => detail.environment === 'live')[0]
				: {};
		},
		getTestMerchantDetails() {
			return this.getMerchantDetails && this.getMerchantDetails.credential
				? this.getMerchantDetails.credential.filter((detail) => detail.environment === 'test')[0]
				: {};
		},
		getLiveMerchantWebhook() {
			return this.getMerchantWebhooks
				? this.getMerchantWebhooks.filter((webhook) => webhook.environment === 'live')[0]
				: {};
		},
		getTestMerchantWebhook() {
			return this.getMerchantWebhooks
				? this.getMerchantWebhooks.filter((webhook) => webhook.environment === 'test')[0]
				: {};
		},
		getMerchantDetailCredentials() {
			return this.getMerchantDetails && this.getMerchantDetails.credential
				? this.getMerchantDetails.credential[0]
				: {};
		}
	},
	watch: {
		isEdited(val) {
			if (!val) {
				setTimeout(() => {
					const data = {
						id: this.getLoggedUser.id,
						...this.payload,
						staff: this.staff
					};
					for (const key in data) {
						if (data[key] === '') {
							delete data[key];
						}
					}
					this.updateMerchantDetails(data);
				}, 500);
			}
		}
	},
	mounted() {
		if (this.$route.query.tab === 'general') {
			this.$refs['generalTab'].click();
		} else if (this.$route.query.tab === 'compliance') {
			this.$refs['complianceTab'].click();
		} else if (this.$route.query.tab === 'payout') {
			this.$refs['payoutTab'].click();
		} else if (this.$route.query.tab === 'team') {
			this.$refs['teamTab'].click();
		} else if (this.$route.query.tab === 'api') {
			this.$refs['apiTab'].click();
		}
	},
	methods: {
		...mapActions(['updateMerchantDetails']),
		handleActiveTab(tab) {
			this.activeTab = tab;
		},
		handleEmitIsEditedValue(val) {
			this.isEdited = val;
		},
		handleMerchantDetails(val) {
			this.payload = { ...val };
		},
		handleUpdateMerchantDetails(val) {
			this.staff = val.staff;
		},
		closePreview() {
			this.kycDoc = null;
		},
		previewKycDoc(kyc) {
			this.kycDoc = kyc;
			this.documentPreview = true;
		},
		confirmKyc(kyc) {
			this.kycDoc = kyc;
		},
		incrementKey() {
			this.complianceKey++;
		}
	}
};
</script>
<style scoped>
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
</style>
