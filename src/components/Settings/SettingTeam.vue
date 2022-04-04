<template>
	<div id="tabs-team-ex1" class="tab-pane m-0 p-0">
		<div class="row row-sm d-flex align-items-center pt-2 m-0 p-0">
			<div class="col-auto">
				<p
					class="label-text p-4 pl-4"
					style="color: black; font-size: 13px; line-height: 18px; transform: translate(0px, 10px)"
				>
					Team Members - 4
				</p>
			</div>
			<div class="col" />
			<div class="col-auto">
				<button type="button" class="button-primary d-inline-flex text-white align-items-center">
					<span class="mb-1 mr-1">
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
							<path
								d="M3.22508 9.49989H0.75V7.0248L7.42042 0.354386C7.52981 0.245028 7.67815 0.183594 7.83283 0.183594C7.98751 0.183594 8.13586 0.245028 8.24525 0.354386L9.8955 2.00464C10.0049 2.11403 10.0663 2.26237 10.0663 2.41705C10.0663 2.57173 10.0049 2.72008 9.8955 2.82947L3.22508 9.49989ZM0.75 10.6666H11.25V11.8332H0.75V10.6666Z"
								fill="white"
							/>
						</svg>
					</span>
					Manage roles
				</button>
			</div>
			<div class="col-auto">
				<button type="button" class="button-success d-inline-flex text-white align-items-center mr-3">
					<span class="mb-1 mr-1">
						<svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="white" />
						</svg>
					</span>
					Invite someone
				</button>
			</div>
			<div class="table-responsive m-0 p-0">
				<table class="table card-table table-vcenter text-nowrap datatable">
					<thead class="font-weight-bold">
						<tr>
							<th class="pl-4">CLIENT</th>
							<th>EMAIL</th>
							<th>ROLE</th>
							<th>STATUS</th>
							<th class="pl-5">CREATED</th>
						</tr>
					</thead>
					<tbody class="p-0 m-0">
						<tr>
							<td class="pl-4">Carlson Limited</td>
							<td>carlson@gmail.com</td>
							<td>Business Owner</td>
							<td>
								<span class="badge bg-success m-1 align-middle" />
								Enabled
							</td>
							<td class="pl-5">15 Dec 2017</td>
						</tr>
						<tr>
							<td class="pl-4">Adobe</td>

							<td>carlson@gmail.com</td>
							<td>Business Owner</td>
							<td>
								<span class="badge bg-success m-1 align-middle" />
								Enabled
							</td>
							<td class="pl-5">15 Apr 2017</td>
						</tr>
						<tr>
							<td class="pl-4">Bluewolf</td>
							<td>carlson@gmail.com</td>
							<td>Business Owner</td>
							<td>
								<span class="badge bg-success m-1 align-middle" />
								Enabled
							</td>
							<td class="pl-5">15 Oct 2017</td>
						</tr>
						<tr>
							<td>Salesforce</td>
							<td>carlson@gmail.com</td>
							<td>Business Owner</td>
							<td>
								<span class="badge bg-success m-1 align-middle" />
								Enabled
							</td>
							<td class="pl-5">15 Sept 2017</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="card-footer d-flex align-items-center">
				<p class="m-0 text-muted">Showing <span>1</span> to <span>8</span> of <span>16</span> entries</p>
				<ul class="pagination m-0 ml-auto">
					<li class="page-item disabled">
						<a class="page-link" href="#" tabindex="-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" />
								<polyline points="15 6 9 12 15 18" />
							</svg>
							prev
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">1</a>
					</li>
					<li class="page-item active">
						<a class="page-link" href="#">2</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">3</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">4</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">5</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">
							next
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" />
								<polyline points="9 6 15 12 9 18" />
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SettingTeam'
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
