const {
  override,
  addBabelPlugin,
  addWebpackAlias
} = require('customize-cra')
const path = require('path')

module.exports = {
  webpack: override(
    addBabelPlugin('styled-jsx/babel'),
    addWebpackAlias({
      '~src': path.resolve(__dirname, 'src'),
      '~root': path.resolve(__dirname),
      '~react-router-dom': path.resolve(__dirname, 'src/common/axios')
    })
  )
}
