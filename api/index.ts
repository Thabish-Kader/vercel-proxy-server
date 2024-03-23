import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 8000;

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://172.16.0.78:4000",
    changeOrigin: true,
  })
);

app.listen(PORT);

export default app;
