const isProd = process.env.NODE_ENV === "production";


module.exports = {
  env: {
    PUBLIC_URL: "",
  },
  cssModules: true, // Enable CSS modules if needed
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
};