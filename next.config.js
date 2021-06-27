const path = require('path')

module.exports = {
  images: {
    loader: 'imgix',
    path:   '',
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles')
    ]
  }
}
