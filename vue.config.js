const path = require('path')
const debug = process.env.NODE_ENV !== 'production'
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
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
          'primary-color': '#1890ff',
          'layout-color': '#9867f7'
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    ...(debug && {
      devtool: 'source-map'
    }),
    resolve: {
      alias: {
        '@': resolve('examples'),
        '@pack': resolve('packages')
      }
    }
  }
}
