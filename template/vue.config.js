module.exports = {
  pluginOptions: {
    enableInSFC: false
  },
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/style/variables.sass";@import "@/assets/style/mixins.sass";@import "@/assets/style/animates.sass";',
        // includePaths: ['@/configs/style'],
      },
    },
  },
  // lintOnSave: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
};
