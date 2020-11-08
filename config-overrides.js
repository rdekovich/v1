const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@css': 'src/css',
    '@fonts': 'src/fonts',
    '@images': 'src/images',
    '@content': 'content/',
    '@static': 'static/',
    '@utils': 'src/utils',
    '@pages': 'src/pages',
    '@styles': 'src/styles'
  }) (config)

  return config
}