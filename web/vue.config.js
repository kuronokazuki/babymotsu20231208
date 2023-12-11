const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/dist/',
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        target: 'https://aso-2201402.main.jp/backend',
        changeOrigin: true,
      }
    }
  },
});