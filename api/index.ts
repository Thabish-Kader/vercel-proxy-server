import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://22dc-115-96-183-112.ngrok-free.app",
  })
);

export default app;
