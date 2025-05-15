import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Load env vars
dotenv.config();

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(hpp());
app.use(morgan("dev"));

// Rate Limiting
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP
  })
);

// TODO: Import and use routes
// app.use('/api/auth', authRoutes);
// app.use('/api/user', userRoutes);

export default app;
