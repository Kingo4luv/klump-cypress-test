<template>
	<div>
		<div v-if="loading" class="form-group">
			<button
				class="button-primary disabled:cursor-default w-full text-white rounded opacity-50"
				:disabled="disabled"
			>
				<div :id="id" class="form-group mb-1 py-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						style="margin: auto; background: none; display: block; shape-rendering: auto"
						width="56px"
						height="30px"
						viewBox="0 0 100 100"
						preserveAspectRatio="xMidYMid"
					>
						<circle
							cx="50"
							cy="50"
							fill="none"
							stroke="#ffffff"
							stroke-width="5"
							r="26"
							stroke-dasharray="122.52211349000194 42.840704496667314"
						>
							<animateTransform
								attributeName="transform"
								type="rotate"
								repeatCount="indefinite"
								dur="0.5813953488372093s"
								values="0 50 50;360 50 50"
								keyTimes="0;1"
							/>
						</circle>
					</svg>
				</div>
			</button>
		</div>
		<div v-else :id="id" class="form-group">
			<button
				class="button-primary py-3 disabled:cursor-default w-full text-white rounded"
				:disabled="disabled"
				style="outline: none"
			>
				<slot />
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'KlumpButton',
	props: {
		disabled: {
			type: Boolean
		},
		id: {
			type: String,
			default: ''
		},
		loading: {
			type: Boolean
		}
	}
};
</script>
<style scoped>
button:disabled,
button[disabled] {
	opacity: 0.5;
}
</style>
