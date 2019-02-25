module.exports = {
  css: { extract: false },
  publicPath: process.env.NODE_ENV === "production" ? "/beaker/" : "/"
};

Vue.config.silent = true
