// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // assetsPublicPath: 'http://fe.alltosun.net/201606bp20/dist/',
    productionSourceMap: false
  },
  dev: {
    env: require('./dev.env'),
    port: 8088,
    proxyTable: {}
  }
}
