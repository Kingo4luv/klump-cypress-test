<!-- eslint-disable prettier/prettier -->
<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		style="margin: auto; background: none; display: block; shape-rendering: auto"
		:width="width ? 'width' : '28px'"
		:height="height ? 'height' : '28px'"
		viewBox="0 0 100 100"
		preserveAspectRatio="xMidYMid"
	>
		<path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#000000" stroke="none">
			<animateTransform
				attributeName="transform"
				type="rotate"
				dur="1s"
				repeatCount="indefinite"
				keyTimes="0;1"
				values="0 50 51;360 50 51"
			/>
		</path>
	</svg>
</template>

<script>
export default {
	name: 'Loader',
	props: {
		width: {
			type: String,
			required: false,
			default: ''
		},
		height: {
			type: String,
			required: false,
			default: ''
		}
	}
};
</script>
