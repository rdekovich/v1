const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@css': 'src/css',
    '@fonts': 'src/fonts',
    '@images': 'src/images',
    '@static': 'static/',
    '@pages': 'src/pages'
  }) (config)

  return config
}