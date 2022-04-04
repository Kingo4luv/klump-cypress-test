<template>
	<section>
		<div class="card">
			<div class="card-header">
				<h3 class="card-title font-weight-bold">Transaction Meta Data</h3>
			</div>
			<div class="table-responsive">
				<table class="table card-table table-vcenter text-nowrap datatable">
					<tbody>
						<tr v-for="(value, index) in metaData" :key="index">
							<td class="font-weight-bold text-capitalize">
								{{ value[0] }}
							</td>
							<td>
								{{ value[1] }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'MetaDataTable',
	props: {
		metaData: {
			type: Array,
			default: () => [],
			required: true
		}
	}
};
</script>
