import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 8000;

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://be11-45-117-30-130.ngrok-free.app",
    changeOrigin: true,
  })
);

app.listen(PORT);

export default app;
