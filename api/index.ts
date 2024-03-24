import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 8000;

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://22dc-115-96-183-112.ngrok-free.app",
    changeOrigin: true,
  })
);
//22dc-115-96-183-112.ngrok-free.app
https: app.listen(PORT);

export default app;
