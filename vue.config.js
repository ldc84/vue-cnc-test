const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-cnc-test/' : '/',
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('~!',resolve('src/assets'))
      .set('~@',resolve('src/components'))
      .set('$@',resolve('src/views'))
  },
  devServer: {
    proxy: 'http://10.250.55.157:3000'
  }
}