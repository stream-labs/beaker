module.exports = {
  css: { extract: false },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/beaker/dist/index.html'
    : '/'
}
