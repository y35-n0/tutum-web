const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `http:${process.env.REACT_APP_API_SERVER}:8000`,
      // target: 'http://3.34.236.155:8000',
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
