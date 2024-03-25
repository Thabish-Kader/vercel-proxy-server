import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import rateLimit from "express-rate-limit";

const app = express();
// Rate limiting middleware
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "Too many requests from this IP, please try again later",
});

app.use(apiLimiter);

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://22dc-115-96-183-112.ngrok-free.app",
    changeOrigin: true,
  })
);

export default app;
