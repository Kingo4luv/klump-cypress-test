module.exports = {
	lintOnSave: process.env.NODE_ENV !== 'production',
	css: {
		loaderOptions: {
			sass: {
				data: '@import "@/assets/scss/base/_variables.scss";'
			}
		}
	},
	chainWebpack: (config) => {
		config.performance
			.maxEntrypointSize(700000)
			.maxAssetSize(700000);
	  	}
};
