<template>
	<section>
		<div class="content p-0 m-0">
			<div class="container-xl">
				<div class="card">
					<!-- When all documents haven't been uploaded -->
					<div class="card-body p-0 m-0 pl-0">
						<div class="row row-sm align-items-center p-4">
							<ValidationProvider
								:ref="incorporationCertificate.ref + 'field'"
								v-slot="{ errors }"
								rules="image|size:5120"
								tag="div"
							>
								<div
									v-if="incorporationCertificate.doc === null"
									class="d-flex align-items-center"
									style="position: relative"
								>
									<div
										style="background-color: #ecf0fa; height: 47px; width: 47px"
										class="d-flex flex-col justify-content-center align-items-center mr-3"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="18"
											viewBox="0 0 16 18"
											fill="none"
										>
											<path
												d="M0.500021 5.6665L5.50252 0.666504H14.665C15.125 0.666504 15.5 1.04567 15.5 1.49317V16.5065C15.4998 16.7258 15.4125 16.9361 15.2574 17.0911C15.1022 17.2461 14.8918 17.3332 14.6725 17.3332H1.32752C1.21808 17.3324 1.10987 17.3101 1.00906 17.2675C0.908246 17.2249 0.816808 17.1629 0.739967 17.085C0.663126 17.007 0.602387 16.9148 0.561216 16.8134C0.520046 16.712 0.499252 16.6034 0.500021 16.494V5.6665ZM6.33335 1.9165L1.75002 6.49984H6.33335V1.9165Z"
												fill="#4062D1"
											/>
										</svg>
									</div>
									<ul class="p-0 mr-3 mb-0">
										<li class="d-flex align-items-center doc_upload">
											<!-- Download SVG icon from http://tabler-icons.io/i/plus -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="icon mr-1 font-weight-bold"
												style="height: 12px; width: 12px"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												stroke-width="2"
												stroke="currentColor"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<line x1="12" y1="5" x2="12" y2="19" />
												<line x1="5" y1="12" x2="19" y2="12" />
											</svg>
											<span style="display: block">Incorporation Certificate</span>
											<input
												v-model="incorporationCertificate.doc"
												type="text"
												name="file"
												hidden
											/>
											<input
												:id="incorporationCertificate.ref"
												:ref="incorporationCertificate.ref"
												type="file"
												accept="image/png, image/jpeg,image/png,.pdf"
												style="
													position: absolute;
													left: -3px;
													top: 0px;
													bottom: 0px;
													width5120%;
													opacity: 0;
												"
												@change="uploadKyc($event, 'incorporationCertificate')"
											/>
											<span
												class="text-danger"
												style="
													position: absolute;
													top: 46px;
													left: 0px;
													right: 0px;
													font-size: 10px;
												"
											>
												{{ errors[0] }}
											</span>
										</li>
									</ul>
									<p
										class="m-0 d-none d-md-block"
										style="color: #414141; line-height: 19px; font-size: 14px"
									>
										Upload PDF, JPG or PNG files - Max size of 5MB.
									</p>
								</div>
								<div v-else class="d-flex align-items-center justify-content-between">
									<div class="d-flex align-items-center width-progress">
										<div
											style="background-color: #ecf0fa; min-height: 47px; min-width: 47px"
											class="d-flex flex-col justify-content-center align-items-center mr-3"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="18"
												viewBox="0 0 16 18"
												fill="none"
											>
												<path
													d="M0.500021 5.6665L5.50252 0.666504H14.665C15.125 0.666504 15.5 1.04567 15.5 1.49317V16.5065C15.4998 16.7258 15.4125 16.9361 15.2574 17.0911C15.1022 17.2461 14.8918 17.3332 14.6725 17.3332H1.32752C1.21808 17.3324 1.10987 17.3101 1.00906 17.2675C0.908246 17.2249 0.816808 17.1629 0.739967 17.085C0.663126 17.007 0.602387 16.9148 0.561216 16.8134C0.520046 16.712 0.499252 16.6034 0.500021 16.494V5.6665ZM6.33335 1.9165L1.75002 6.49984H6.33335V1.9165Z"
													fill="#4062D1"
												/>
											</svg>
										</div>
										<div
											v-if="incorporationCertificate.uploading"
											style="width: 190px"
											class="progress"
										>
											<div
												class="progress-bar bg-success"
												:style="{ width: incorporationCertificate.uploadPercent + '%' }"
											/>
										</div>
										<span
											v-else
											data-toggle="modal"
											data-target="#modal-doc-preview"
											style="display: block; cursor: pointer"
											class="doc_uploaded"
											@click="openPreviewModal(incorporationCertificate)"
											>CAC_Document</span
										>
									</div>
									<div
										v-if="incorporationCertificate.doc && !incorporationCertificate.uploading"
										class="d-flex align-items-center"
									>
										<!-- download KYC -->
										<a :href="incorporationCertificate.doc" download>
											<svg
												class="mr-4"
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height="16"
												viewBox="0 0 18 16"
												fill="none"
											>
												<path
													d="M9.83366 6.33333H14.0003L9.00033 11.3333L4.00033 6.33333H8.16699V0.5H9.83366V6.33333ZM2.33366 13.8333H15.667V8H17.3337V14.6667C17.3337 14.8877 17.2459 15.0996 17.0896 15.2559C16.9333 15.4122 16.7213 15.5 16.5003 15.5H1.50033C1.27931 15.5 1.06735 15.4122 0.91107 15.2559C0.75479 15.0996 0.666992 14.8877 0.666992 14.6667V8H2.33366V13.8333Z"
													fill="#4062D1"
												/>
											</svg>
										</a>
										<!-- delete kyc -->
										<svg
											data-toggle="modal"
											data-target="#modal-delete-kyc"
											style="cursor: pointer"
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											@click="deleteKyc(incorporationCertificate)"
										>
											<path
												d="M2.33366 5.6665H15.667V16.4998C15.667 16.7209 15.5792 16.9328 15.4229 17.0891C15.2666 17.2454 15.0547 17.3332 14.8337 17.3332H3.16699C2.94598 17.3332 2.73402 17.2454 2.57774 17.0891C2.42146 16.9328 2.33366 16.7209 2.33366 16.4998V5.6665ZM4.00033 7.33317V15.6665H14.0003V7.33317H4.00033ZM6.50033 8.99984H8.16699V13.9998H6.50033V8.99984ZM9.83366 8.99984H11.5003V13.9998H9.83366V8.99984ZM4.83366 3.1665V1.49984C4.83366 1.27882 4.92146 1.06686 5.07774 0.910582C5.23402 0.754301 5.44598 0.666504 5.66699 0.666504H12.3337C12.5547 0.666504 12.7666 0.754301 12.9229 0.910582C13.0792 1.06686 13.167 1.27882 13.167 1.49984V3.1665H17.3337V4.83317H0.666992V3.1665H4.83366ZM6.50033 2.33317V3.1665H11.5003V2.33317H6.50033Z"
												fill="#CE1112"
											/>
										</svg>
									</div>
								</div>
							</ValidationProvider>
							<hr class="mt-4 pl-0 ml-0" />
							<ValidationProvider
								:ref="mou.ref + 'field'"
								v-slot="{ errors }"
								rules="image|size:5120"
								tag="div"
							>
								<div
									v-if="mou.doc === null"
									class="d-flex align-items-center"
									style="position: relative"
								>
									<div
										style="background-color: #ecf0fa; height: 47px; width: 47px"
										class="d-flex flex-col justify-content-center align-items-center mr-3"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="18"
											viewBox="0 0 16 18"
											fill="none"
										>
											<path
												d="M0.500021 5.6665L5.50252 0.666504H14.665C15.125 0.666504 15.5 1.04567 15.5 1.49317V16.5065C15.4998 16.7258 15.4125 16.9361 15.2574 17.0911C15.1022 17.2461 14.8918 17.3332 14.6725 17.3332H1.32752C1.21808 17.3324 1.10987 17.3101 1.00906 17.2675C0.908246 17.2249 0.816808 17.1629 0.739967 17.085C0.663126 17.007 0.602387 16.9148 0.561216 16.8134C0.520046 16.712 0.499252 16.6034 0.500021 16.494V5.6665ZM6.33335 1.9165L1.75002 6.49984H6.33335V1.9165Z"
												fill="#4062D1"
											/>
										</svg>
									</div>
									<ul class="p-0 mr-3 mb-0">
										<li class="d-flex align-items-center doc_upload">
											<!-- Download SVG icon from http://tabler-icons.io/i/plus -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="icon mr-1 font-weight-bold"
												style="height: 12px; width: 12px"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												stroke-width="2"
												stroke="currentColor"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<line x1="12" y1="5" x2="12" y2="19" />
												<line x1="5" y1="12" x2="19" y2="12" />
											</svg>
											<span style="display: block">MOU</span>
											<input v-model="mou.doc" type="text" name="file" hidden />
											<input
												id=""
												:ref="mou.ref"
												type="file"
												accept="image/png, image/jpeg,image/png,.pdf"
												style="
													position: absolute;
													left: -3px;
													top: 0px;
													bottom: 0px;
													width: 100%;
													opacity: 0;
												"
												@change="uploadKyc($event, 'mou')"
											/>
											<span
												class="text-danger"
												style="
													position: absolute;
													top: 46px;
													left: 0px;
													right: 0px;
													font-size: 10px;
												"
											>
												{{ errors[0] }}
											</span>
										</li>
									</ul>
									<p
										class="m-0 d-none d-md-block"
										style="color: #414141; line-height: 19px; font-size: 14px"
									>
										Upload PDF, JPG or PNG files - Max size of 5MB.
									</p>
								</div>
								<div v-else class="d-flex align-items-center justify-content-between">
									<div class="d-flex align-items-center">
										<div
											style="background-color: #ecf0fa; min-height: 47px; min-width: 47px"
											class="d-flex flex-col justify-content-center align-items-center mr-3"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="18"
												viewBox="0 0 16 18"
												fill="none"
											>
												<path
													d="M0.500021 5.6665L5.50252 0.666504H14.665C15.125 0.666504 15.5 1.04567 15.5 1.49317V16.5065C15.4998 16.7258 15.4125 16.9361 15.2574 17.0911C15.1022 17.2461 14.8918 17.3332 14.6725 17.3332H1.32752C1.21808 17.3324 1.10987 17.3101 1.00906 17.2675C0.908246 17.2249 0.816808 17.1629 0.739967 17.085C0.663126 17.007 0.602387 16.9148 0.561216 16.8134C0.520046 16.712 0.499252 16.6034 0.500021 16.494V5.6665ZM6.33335 1.9165L1.75002 6.49984H6.33335V1.9165Z"
													fill="#4062D1"
												/>
											</svg>
										</div>
										<div v-if="mou.uploading" style="width: 190px" class="progress">
											<div
												class="progress-bar bg-success"
												:style="{ width: mou.uploadPercent + '%' }"
											/>
										</div>
										<span
											v-else
											style="display: block; cursor: pointer"
											data-toggle="modal"
											data-target="#modal-doc-preview"
											class="doc_uploaded"
											@click="openPreviewModal(mou)"
											>MOU</span
										>
									</div>
									<div v-if="mou.doc && !mou.uploading" class="d-flex align-items-center">
										<!-- download KYC -->
										<a :href="mou.doc" download>
											<svg
												class="mr-4"
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height="16"
												viewBox="0 0 18 16"
												fill="none"
											>
												<path
													d="M9.83366 6.33333H14.0003L9.00033 11.3333L4.00033 6.33333H8.16699V0.5H9.83366V6.33333ZM2.33366 13.8333H15.667V8H17.3337V14.6667C17.3337 14.8877 17.2459 15.0996 17.0896 15.2559C16.9333 15.4122 16.7213 15.5 16.5003 15.5H1.50033C1.27931 15.5 1.06735 15.4122 0.91107 15.2559C0.75479 15.0996 0.666992 14.8877 0.666992 14.6667V8H2.33366V13.8333Z"
													fill="#4062D1"
												/>
											</svg>
										</a>
										<!-- delete KYC -->
										<svg
											data-toggle="modal"
											data-target="#modal-delete-kyc"
											style="cursor: pointer"
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											@click="deleteKyc(mou)"
										>
											<path
												d="M2.33366 5.6665H15.667V16.4998C15.667 16.7209 15.5792 16.9328 15.4229 17.0891C15.2666 17.2454 15.0547 17.3332 14.8337 17.3332H3.16699C2.94598 17.3332 2.73402 17.2454 2.57774 17.0891C2.42146 16.9328 2.33366 16.7209 2.33366 16.4998V5.6665ZM4.00033 7.33317V15.6665H14.0003V7.33317H4.00033ZM6.50033 8.99984H8.16699V13.9998H6.50033V8.99984ZM9.83366 8.99984H11.5003V13.9998H9.83366V8.99984ZM4.83366 3.1665V1.49984C4.83366 1.27882 4.92146 1.06686 5.07774 0.910582C5.23402 0.754301 5.44598 0.666504 5.66699 0.666504H12.3337C12.5547 0.666504 12.7666 0.754301 12.9229 0.910582C13.0792 1.06686 13.167 1.27882 13.167 1.49984V3.1665H17.3337V4.83317H0.666992V3.1665H4.83366ZM6.50033 2.33317V3.1665H11.5003V2.33317H6.50033Z"
												fill="#CE1112"
											/>
										</svg>
									</div>
								</div>
							</ValidationProvider>
							<hr class="mt-4 pl-0 ml-0" />
							<ValidationProvider
								:ref="driversLicence.ref + 'field'"
								v-slot="{ errors }"
								rules="image|size:5120"
							>
								<div
									v-if="driversLicence.doc === null"
									class="d-flex align-items-center"
									style="position: relative"
								>
									<div
										style="background-color: #ecf0fa; height: 47px; width: 47px"
										class="d-flex flex-col justify-content-center align-items-center mr-3"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="18"
											viewBox="0 0 16 18"
											fill="none"
										>
											<path
												d="M0.500021 5.6665L5.50252 0.666504H14.665C15.125 0.666504 15.5 1.04567 15.5 1.49317V16.5065C15.4998 16.7258 15.4125 16.9361 15.2574 17.0911C15.1022 17.2461 14.8918 17.3332 14.6725 17.3332H1.32752C1.21808 17.3324 1.10987 17.3101 1.00906 17.2675C0.908246 17.2249 0.816808 17.1629 0.739967 17.085C0.663126 17.007 0.602387 16.9148 0.561216 16.8134C0.520046 16.712 0.499252 16.6034 0.500021 16.494V5.6665ZM6.33335 1.9165L1.75002 6.49984H6.33335V1.9165Z"
												fill="#4062D1"
											/>
										</svg>
									</div>
									<ul class="p-0 mr-3 mb-0">
										<li class="d-flex align-items-center doc_upload">
											<!-- Download SVG icon from http://tabler-icons.io/i/plus -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="icon mr-1 font-weight-bold"
												style="height: 12px; width: 12px"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												stroke-width="2"
												stroke="currentColor"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<line x1="12" y1="5" x2="12" y2="19" />
												<line x1="5" y1="12" x2="19" y2="12" />
											</svg>
											<span style="display: block">Drivers Licence</span>
											<input v-model="driversLicence.doc" type="text" name="file" hidden />
											<input
												id=""
												:ref="driversLicence.ref"
												type="file"
												accept="image/png, image/jpeg,image/png,.pdf"
												style="
													position: absolute;
													left: -3px;
													top: 0px;
													bottom: 0px;
													width: 100%;
													opacity: 0;
												"
												@change="uploadKyc($event, 'driversLicence')"
											/>
											<span
												class="text-danger"
												style="
													position: absolute;
													top: 46px;
													left: 0px;
													right: 0px;
													font-size: 10px;
												"
											>
												{{ errors[0] }}
											</span>
										</li>
									</ul>
									<p
										class="m-0 d-none d-md-block"
										style="color: #414141; line-height: 19px; font-size: 14px"
									>
										Upload PDF, JPG or PNG files - Max size of 5MB.
									</p>
								</div>
								<div v-else class="d-flex align-items-center justify-content-between">
									<div class="d-flex align-items-center">
										<div
											style="background-color: #ecf0fa; min-height: 47px; min-width: 47px"
											class="d-flex flex-col justify-content-center align-items-center mr-3"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="18"
												viewBox="0 0 16 18"
												fill="none"
											>
												<path
													d="M0.500021 5.6665L5.50252 0.666504H14.665C15.125 0.666504 15.5 1.04567 15.5 1.49317V16.5065C15.4998 16.7258 15.4125 16.9361 15.2574 17.0911C15.1022 17.2461 14.8918 17.3332 14.6725 17.3332H1.32752C1.21808 17.3324 1.10987 17.3101 1.00906 17.2675C0.908246 17.2249 0.816808 17.1629 0.739967 17.085C0.663126 17.007 0.602387 16.9148 0.561216 16.8134C0.520046 16.712 0.499252 16.6034 0.500021 16.494V5.6665ZM6.33335 1.9165L1.75002 6.49984H6.33335V1.9165Z"
													fill="#4062D1"
												/>
											</svg>
										</div>
										<div v-if="driversLicence.uploading" style="width: 190px" class="progress">
											<div
												class="progress-bar bg-success"
												:style="{ width: driversLicence.uploadPercent + '%' }"
											/>
										</div>
										<span
											v-else
											style="display: block; cursor: pointer"
											data-toggle="modal"
											data-target="#modal-doc-preview"
											class="doc_uploaded"
											@click="openPreviewModal(driversLicence)"
											>Drivers Licence</span
										>
									</div>
									<div
										v-if="driversLicence.doc && !driversLicence.uploading"
										class="d-flex align-items-center"
									>
										<!-- download KYC -->
										<a :href="driversLicence.doc" download>
											<svg
												class="mr-4"
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height="16"
												viewBox="0 0 18 16"
												fill="none"
											>
												<path
													d="M9.83366 6.33333H14.0003L9.00033 11.3333L4.00033 6.33333H8.16699V0.5H9.83366V6.33333ZM2.33366 13.8333H15.667V8H17.3337V14.6667C17.3337 14.8877 17.2459 15.0996 17.0896 15.2559C16.9333 15.4122 16.7213 15.5 16.5003 15.5H1.50033C1.27931 15.5 1.06735 15.4122 0.91107 15.2559C0.75479 15.0996 0.666992 14.8877 0.666992 14.6667V8H2.33366V13.8333Z"
													fill="#4062D1"
												/>
											</svg>
										</a>
										<!-- delete KYC -->
										<svg
											data-toggle="modal"
											data-target="#modal-delete-kyc"
											style="cursor: pointer"
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											@click="deleteKyc(driversLicence)"
										>
											<path
												d="M2.33366 5.6665H15.667V16.4998C15.667 16.7209 15.5792 16.9328 15.4229 17.0891C15.2666 17.2454 15.0547 17.3332 14.8337 17.3332H3.16699C2.94598 17.3332 2.73402 17.2454 2.57774 17.0891C2.42146 16.9328 2.33366 16.7209 2.33366 16.4998V5.6665ZM4.00033 7.33317V15.6665H14.0003V7.33317H4.00033ZM6.50033 8.99984H8.16699V13.9998H6.50033V8.99984ZM9.83366 8.99984H11.5003V13.9998H9.83366V8.99984ZM4.83366 3.1665V1.49984C4.83366 1.27882 4.92146 1.06686 5.07774 0.910582C5.23402 0.754301 5.44598 0.666504 5.66699 0.666504H12.3337C12.5547 0.666504 12.7666 0.754301 12.9229 0.910582C13.0792 1.06686 13.167 1.27882 13.167 1.49984V3.1665H17.3337V4.83317H0.666992V3.1665H4.83366ZM6.50033 2.33317V3.1665H11.5003V2.33317H6.50033Z"
												fill="#CE1112"
											/>
										</svg>
									</div>
								</div>
							</ValidationProvider>
							<hr class="mt-4 pl-0 ml-0" />
							<ValidationProvider
								:ref="internationalPassport.ref + 'field'"
								v-slot="{ errors }"
								rules="image|size:5120"
							>
								<div
									v-if="internationalPassport.doc === null"
									class="d-flex align-items-center"
									style="position: relative"
								>
									<div
										style="background-color: #ecf0fa; height: 47px; width: 47px"
										class="d-flex flex-col justify-content-center align-items-center mr-3"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="18"
											viewBox="0 0 16 18"
											fill="none"
										>
											<path
												d="M0.500021 5.6665L5.50252 0.666504H14.665C15.125 0.666504 15.5 1.04567 15.5 1.49317V16.5065C15.4998 16.7258 15.4125 16.9361 15.2574 17.0911C15.1022 17.2461 14.8918 17.3332 14.6725 17.3332H1.32752C1.21808 17.3324 1.10987 17.3101 1.00906 17.2675C0.908246 17.2249 0.816808 17.1629 0.739967 17.085C0.663126 17.007 0.602387 16.9148 0.561216 16.8134C0.520046 16.712 0.499252 16.6034 0.500021 16.494V5.6665ZM6.33335 1.9165L1.75002 6.49984H6.33335V1.9165Z"
												fill="#4062D1"
											/>
										</svg>
									</div>
									<ul class="p-0 mr-3 mb-0">
										<li class="d-flex align-items-center doc_upload">
											<!-- Download SVG icon from http://tabler-icons.io/i/plus -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="icon mr-1 font-weight-bold"
												style="height: 12px; width: 12px"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												stroke-width="2"
												stroke="currentColor"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<line x1="12" y1="5" x2="12" y2="19" />
												<line x1="5" y1="12" x2="19" y2="12" />
											</svg>
											<span style="display: block">International Passport</span>
											<input v-model="internationalPassport.doc" type="text" name="file" hidden />
											<input
												id=""
												:ref="internationalPassport.ref"
												type="file"
												accept="image/png, image/jpeg,image/png,.pdf"
												style="
													position: absolute;
													left: -3px;
													top: 0px;
													bottom: 0px;
													width: 100%;
													opacity: 0;
												"
												@change="uploadKyc($event, 'internationalPassport')"
											/>
											<span
												class="text-danger"
												style="
													position: absolute;
													top: 46px;
													left: 0px;
													right: 0px;
													font-size: 10px;
												"
											>
												{{ errors[0] }}
											</span>
										</li>
									</ul>
									<p
										class="m-0 d-none d-md-block"
										style="color: #414141; line-height: 19px; font-size: 14px"
									>
										Upload PDF, JPG or PNG files - Max size of 5MB.
									</p>
								</div>
								<div v-else class="d-flex align-items-center justify-content-between">
									<div class="d-flex align-items-center">
										<div
											style="background-color: #ecf0fa; min-height: 47px; min-width: 47px"
											class="d-flex flex-col justify-content-center align-items-center mr-3"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="18"
												viewBox="0 0 16 18"
												fill="none"
											>
												<path
													d="M0.500021 5.6665L5.50252 0.666504H14.665C15.125 0.666504 15.5 1.04567 15.5 1.49317V16.5065C15.4998 16.7258 15.4125 16.9361 15.2574 17.0911C15.1022 17.2461 14.8918 17.3332 14.6725 17.3332H1.32752C1.21808 17.3324 1.10987 17.3101 1.00906 17.2675C0.908246 17.2249 0.816808 17.1629 0.739967 17.085C0.663126 17.007 0.602387 16.9148 0.561216 16.8134C0.520046 16.712 0.499252 16.6034 0.500021 16.494V5.6665ZM6.33335 1.9165L1.75002 6.49984H6.33335V1.9165Z"
													fill="#4062D1"
												/>
											</svg>
										</div>
										<div
											v-if="internationalPassport.uploading"
											style="width: 190px"
											class="progress"
										>
											<div
												class="progress-bar bg-success"
												:style="{ width: internationalPassport.uploadPercent + '%' }"
											/>
										</div>
										<span
											v-else
											style="display: block; cursor: pointer"
											data-toggle="modal"
											data-target="#modal-doc-preview"
											class="doc_uploaded"
											@click="openPreviewModal(internationalPassport)"
											>Interational Passsport</span
										>
									</div>
									<div
										v-if="internationalPassport.doc && !internationalPassport.uploading"
										class="d-flex align-items-center"
									>
										<!-- download KYC -->
										<a :href="internationalPassport.doc" download>
											<svg
												class="mr-4"
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height="16"
												viewBox="0 0 18 16"
												fill="none"
											>
												<path
													d="M9.83366 6.33333H14.0003L9.00033 11.3333L4.00033 6.33333H8.16699V0.5H9.83366V6.33333ZM2.33366 13.8333H15.667V8H17.3337V14.6667C17.3337 14.8877 17.2459 15.0996 17.0896 15.2559C16.9333 15.4122 16.7213 15.5 16.5003 15.5H1.50033C1.27931 15.5 1.06735 15.4122 0.91107 15.2559C0.75479 15.0996 0.666992 14.8877 0.666992 14.6667V8H2.33366V13.8333Z"
													fill="#4062D1"
												/>
											</svg>
										</a>
										<!-- delete KYC -->
										<svg
											data-toggle="modal"
											data-target="#modal-delete-kyc"
											style="cursor: pointer"
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
											@click="deleteKyc(internationalPassport)"
										>
											<path
												d="M2.33366 5.6665H15.667V16.4998C15.667 16.7209 15.5792 16.9328 15.4229 17.0891C15.2666 17.2454 15.0547 17.3332 14.8337 17.3332H3.16699C2.94598 17.3332 2.73402 17.2454 2.57774 17.0891C2.42146 16.9328 2.33366 16.7209 2.33366 16.4998V5.6665ZM4.00033 7.33317V15.6665H14.0003V7.33317H4.00033ZM6.50033 8.99984H8.16699V13.9998H6.50033V8.99984ZM9.83366 8.99984H11.5003V13.9998H9.83366V8.99984ZM4.83366 3.1665V1.49984C4.83366 1.27882 4.92146 1.06686 5.07774 0.910582C5.23402 0.754301 5.44598 0.666504 5.66699 0.666504H12.3337C12.5547 0.666504 12.7666 0.754301 12.9229 0.910582C13.0792 1.06686 13.167 1.27882 13.167 1.49984V3.1665H17.3337V4.83317H0.666992V3.1665H4.83366ZM6.50033 2.33317V3.1665H11.5003V2.33317H6.50033Z"
												fill="#CE1112"
											/>
										</svg>
									</div>
								</div>
							</ValidationProvider>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="content p-0 m-0" style="margin-top: -10px">
			<div class="container-xl">
				<div class="card">
					<div class="card-body p-0 m-0 pl-0">
						<iframe
							:src="`https://www.google.com/maps/embed/v1/place?key=${googleMapKey}&q=Nigeria`"
							class="col m-0 p-0"
							height="350"
							style="border: 0"
							allowfullscreen=""
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="content p-0 m-0">
			<div class="container-xl">
				<div class="card">
					<div class="card-body p-0 m-0 pl-0">
						<div v-if="!isEdited" class="row row-sm align-items-center p-4">
							<div class="col">
								<div class="label-text" style="line-height: 19px; font-size: 14px; color: #5c5c5c">
									Owner's Email
								</div>
								<h4 class="card-title m-0 font-weight-bold">
									<a href="#" class="label-text" style="color: black">{{
										getMerchantDetails.email
									}}</a>
								</h4>
							</div>
							<div class="col">
								<div class="label-text" style="line-height: 19px; font-size: 14px; color: #5c5c5c">
									Support
								</div>
								<h4 class="card-title m-0 font-weight-bold">
									<a href="#" class="label-text" style="color: black">{{
										getMerchantDetails.support_email ? getMerchantDetails.support_email : '-'
									}}</a>
								</h4>
							</div>
							<div class="col">
								<div class="label-text" style="line-height: 19px; font-size: 14px; color: #5c5c5c">
									Disputes
								</div>
								<h4 class="card-title m-0 font-weight-bold">
									<a href="#" class="label-text" style="color: black">{{
										getMerchantDetails.dispute_email ? getMerchantDetails.dispute_email : '-'
									}}</a>
								</h4>
							</div>
							<hr class="mt-4 pl-0 ml-0" />
							<div class="row row-sm align-items-center">
								<div class="col">
									<p
										class="label-text mb-2"
										style="color: #5c5c5c; font-size: 14px; line-height: 19px"
									>
										Phone Number
									</p>
									<h4 class="card-title m-0 font-weight-bold align-items-center">
										<span class="label-text" style="color: black">{{
											getMerchantDetails.phone
										}}</span>
									</h4>
								</div>
								<div class="col">
									<p
										class="label-text mb-2"
										style="color: #5c5c5c; font-size: 14px; line-height: 19px"
									>
										Website
									</p>
									<h4 class="card-title m-0 align-items-center">
										<span class="label-text" style="color: black">{{
											getMerchantDetails.website ? getMerchantDetails.website : '-'
										}}</span>
									</h4>
								</div>
								<div class="col" />
							</div>
						</div>
						<ValidationObserver>
							<form>
								<div v-if="isEdited" class="row row-sm align-items-center p-4">
									<div class="col mr-6">
										<ValidationProvider v-slot="{ errors }" rules="required|email">
											<label class="form-label">General Email</label>
											<input
												v-model="payload.email"
												type="email"
												name="email"
												disabled
												class="form-control font-weight-bold w-50"
												placeholder="email"
											/>
											<div class="text-xs text-danger mt-0">
												{{ errors[0] }}
											</div>
										</ValidationProvider>
									</div>
									<div class="col mr-6">
										<ValidationProvider v-slot="{ errors }" rules="required|email">
											<label class="form-label">Support Email</label>
											<input
												v-model="payload.support_email"
												type="email"
												name="support email"
												class="form-control font-weight-bold w-50"
												placeholder="support email"
											/>
											<div class="text-xs text-danger mt-0">
												{{ errors[0] }}
											</div>
										</ValidationProvider>
									</div>
									<div class="col mr-6">
										<ValidationProvider v-slot="{ errors }" rules="required|email">
											<label class="form-label">Disputes Email</label>
											<input
												v-model="payload.dispute_email"
												type="email"
												name="dispute email"
												class="form-control font-weight-bold w-50"
												placeholder="dispute email"
											/>
											<div class="text-xs text-danger mt-0">
												{{ errors[0] }}
											</div>
										</ValidationProvider>
									</div>
									<hr class="mt-4 pl-0 ml-0" />

									<div class="row row-sm align-items-center">
										<div class="col mr-6">
											<ValidationProvider v-slot="{ errors }" rules="required|phone">
												<label class="form-label">Phone Number</label>
												<input
													v-model="payload.phone"
													type="phone"
													name="phone"
													disabled
													class="form-control font-weight-bold w-50"
													placeholder="phone"
												/>
												<div class="text-xs text-danger mt-0">
													{{ errors[0] }}
												</div>
											</ValidationProvider>
										</div>
										<div class="col mr-6">
											<ValidationProvider v-slot="{ errors }" rules="required|url">
												<label class="form-label">Website</label>
												<input
													v-model="payload.website"
													type="text"
													name="website"
													class="form-control font-weight-bold w-50"
													placeholder="website"
												/>
												<div class="text-xs text-danger mt-0">
													{{ errors[0] }}
												</div>
											</ValidationProvider>
										</div>
										<div class="col mr-6" />
									</div>
								</div>
							</form>
						</ValidationObserver>
					</div>
				</div>
			</div>
		</div>

		<div class="content p-0 m-0 mb-4">
			<div class="container-xl">
				<div class="card">
					<div class="card-body p-0 m-0 pl-0">
						<div class="row row-sm align-items-center p-4">
							<div class="col">
								<div class="label-text" style="line-height: 19px; font-size: 14px; color: #5c5c5c">
									Account
								</div>
								<h4 class="card-title m-0 font-weight-bold">
									<a href="#" class="label-text" style="color: black">{{ businessName }}</a>
								</h4>
							</div>
							<div class="col">
								<div class="label-text" style="line-height: 19px; font-size: 14px; color: #5c5c5c">
									Owner
								</div>
								<h4 class="card-title m-0 font-weight-bold">
									<a href="#" class="label-text" style="color: black">{{ fullname }}</a>
								</h4>
							</div>
							<div class="col" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import '@/validations.js';
import api from '../../utils/api';
import eventHub from '../../utils/eventHub';

export default {
	name: 'SettingCompliance2',
	components: {
		ValidationObserver,
		ValidationProvider
	},
	props: {
		isEdited: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			incorporationCertificate: {
				id: null,
				merchantId: null,
				ref: 'inc_cert',
				docType: 'Incorporation Certificate',
				doc: null,
				isApproved: false,
				uploading: false,
				uploadPercent: 0
			},
			mou: {
				id: null,
				merchantId: null,
				ref: 'mou',
				docType: 'MOU',
				doc: null,
				isApproved: false,
				uploading: false,
				uploadPercent: 0
			},
			driversLicence: {
				id: null,
				merchantId: null,
				ref: 'drivers_id',
				docType: 'Drivers Licence',
				doc: null,
				isApproved: false,
				uploading: false,
				uploadPercent: 0
			},
			internationalPassport: {
				id: null,
				merchantId: null,
				ref: 'international_passport',
				docType: 'International Passport',
				doc: null,
				isApproved: false,
				uploading: false,
				uploadPercent: 0
			},
			payload: {},
			googleMapKey: ''
		};
	},
	computed: {
		...mapGetters(['getLoggedUser', 'getMerchantKyc', 'getMerchantDetails']),
		fullname() {
			return `${this.getMerchantDetails.firstname} ${this.getMerchantDetails.lastname}`;
		},
		businessName() {
			return this.getMerchantDetails.business_name;
		}
	},
	watch: {
		getMerchantKyc(data) {
			this.assignKyc(data);
			this.$emit('reRender');
		},
		isEdited(val) {
			if (!val) {
				this.$emit('merchantDetails', this.payload);
			}
		}
	},
	mounted() {
		this.assignKyc(this.getMerchantKyc);
		this.payload = {
			email: this.getMerchantDetails.email || '',
			support_email: this.getMerchantDetails.support_email || '',
			dispute_email: this.getMerchantDetails.dispute_email || '',
			phone: this.getMerchantDetails.phone || '',
			website: this.getMerchantDetails.website || ''
		};
		this.googleMapKey = process.env.VUE_APP_GOOGLE_MAP_API_KEY;
	},
	created() {
		eventHub.$on('refreshMerchantKyc', () => {
			this.fetchMerchantKyc(this.getLoggedUser.id);
		});
	},
	methods: {
		...mapActions(['fetchMerchantKyc']),
		/**
		 * type @string must match
		 * any of the defined KYC types
		 * in the data property
		 * (
		 * 	incorporationCertificate,
		 * 	driversLicence
		 * 	mou
		 * 	internationalPassport
		 * )
		 */
		async uploadKyc(event, type) {
			const fileRef = this[type]['ref'];
			const { valid } = await this.$refs[fileRef + 'field'].validate(event);
			if (valid) {
				let _this = this;
				this[type]['doc'] = this.$refs[fileRef].files[0];
				let formData = new FormData();
				this[type]['uploading'] = true;
				formData.append('document_type', this[type]['docType']);
				formData.append('file', this[type]['doc']);
				api.post(`merchants/${this.getLoggedUser.id}/kyc-document`, formData).then(() => {
					let progress = setInterval(function () {
						_this[type]['uploadPercent'] = _this[type]['uploadPercent'] + 20;
						if (_this[type]['uploadPercent'] === 120) {
							clearInterval(progress);
							_this[type]['uploading'] = false;
						}
					}, 1000);
				});
			}
		},
		/**
		 * works to help dynamically assign available kyc
		 * documents to their respective data property
		 *
		 */
		assignKyc(documents) {
			if (documents.length > 0) {
				documents.forEach((kyc) => {
					switch (kyc.document_type) {
					case 'Incorporation Certificate':
						this.incorporationCertificate.id = kyc.id;
						this.incorporationCertificate.merchantId = kyc.merchant_id;
						this.incorporationCertificate.doc = kyc.document;
						this.incorporationCertificate.isApproved = kyc.is_approved;
						break;
					case 'MOU':
						this.mou.id = kyc.id;
						this.mou.merchantId = kyc.merchant_id;
						this.mou.doc = kyc.document;
						this.mou.isApproved = kyc.is_approved;
						break;
					case 'Drivers Licence':
						this.driversLicence.id = kyc.id;
						this.driversLicence.merchantId = kyc.merchant_id;
						this.driversLicence.doc = kyc.document;
						this.driversLicence.isApproved = kyc.is_approved;
						break;
					case 'International Passport':
						this.internationalPassport.id = kyc.id;
						this.internationalPassport.merchantId = kyc.merchant_id;
						this.internationalPassport.doc = kyc.document;
						this.internationalPassport.isApproved = kyc.is_approved;
						break;
					}
				});
			}
		},
		openPreviewModal(kyc) {
			this.$emit('openPreviewModal', kyc);
		},
		deleteKyc(kyc) {
			this.$emit('openConfirmationModal', kyc);
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
.doc_upload {
	border: 1px dashed #4062d1;
	border-radius: 5px;
	padding: 10px 17px;
	font-weight: 800;
	font-size: 14px;
	line-height: 19px;
	color: #4062d1;
}
.doc_uploaded {
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	text-decoration-line: underline;
	color: #4062d1;
}
.width-progress {
	width: 60%;
}
@media only screen and (min-width: 1220px) {
	.width-progress {
		width: 22%;
	}
}
</style>
