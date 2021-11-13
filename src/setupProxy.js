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
    }),
    "/api2",
    createProxyMiddleware({
      target: `http:${process.env.REACT_APP_API_SERVER}:8005`,
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "",
      },
    })
  );
};
