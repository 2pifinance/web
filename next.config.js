const path = require('path')

module.exports = {
  exportTrailingSlash: true,
  images: {
    loader: 'custom'
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles')
    ]
  }
}
