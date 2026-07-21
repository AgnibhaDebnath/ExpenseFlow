import express from "express"
import signupController from "./auth.controller.js";
import signupValidator from "./auth.validator.js";
const authRoutes = express.Router();


authRoutes.post("/auth/signup",signupValidator,signupController);

export default authRoutes;