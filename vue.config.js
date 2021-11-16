const debug = process.env.NODE_ENV !== 'production'
const path = require('path')
let devWebpackConfig = {}
if (debug) {
  devWebpackConfig = {
    devtool: 'source-map'
  }
}
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      // 页面入口
      entry: 'examples/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#13c2c2',
          // "primary-color": "#9867f7",
          'layout-color': '#9867f7'
          // "layout-color": "#ee88aa"
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    // plugins: [...buildPlugins]
    ...devWebpackConfig,
    resolve: {
      alias: {
        '@': resolve('examples'),
        '@pack': resolve('packages')
      }
    }
  }
}
