const { createProxyMiddleware } = require("http-proxy-middleware");

const apiProxy = createProxyMiddleware({
  target: "http://localhost:8080",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
  onProxyRes(proxyRes) {
    proxyRes.headers["x-added"] = "foobar"; // add new header to response
    delete proxyRes.headers["x-removed"]; // remove header from response
  },
});

export default function (req, res) {
  return apiProxy(req, res);
}
