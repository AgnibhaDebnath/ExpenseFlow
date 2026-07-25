import express from "express"
import authRoutes from "./modules/auth/auth.routes.js";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api",authRoutes)
export default app;