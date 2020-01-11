module.exports = {
  // chainWebpack: config => {
  //   config.module
  //     .rule("raw")
  //     .test(/\.vue$/)
  //     .use("raw-loader")
  //     .loader("raw-loader");
  // },
  css: { extract: false },
  publicPath: process.env.NODE_ENV === "production" ? "/beaker/" : "/"
};
