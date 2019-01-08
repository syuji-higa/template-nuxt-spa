const { resolve, join } = require('path')
const rootPath = resolve(__dirname, '../')

module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.styl(us)?$/,
        loaders: ['vue-style-loader', 'css-loader', 'stylus-loader', {
          loader: 'style-resources-loader',
          options: {
            patterns: [
              join(rootPath, './assets/css/has-own-property.js'),
              join(rootPath, './assets/css/setting.styl'),
              join(rootPath, './assets/css/easings.styl'),
              join(rootPath, './assets/css/mixins.styl'),
              join(rootPath, './assets/css/base.styl')
            ]
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': rootPath,
      '~': rootPath
    }
  }
}
