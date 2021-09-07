const path = require('path')

module.exports = {
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
