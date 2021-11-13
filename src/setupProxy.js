const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `http:${process.env.REACT_APP_API_SERVER}:8000`,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
