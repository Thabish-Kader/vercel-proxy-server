// this file is for testing purposes in local development go to api/index.ts for production code
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 8000;

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
  })
);

app.listen(PORT);

export default app;
