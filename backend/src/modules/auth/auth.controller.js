import { success } from "zod";
import signupService from "./auth.service.js";
import dotenv from "dotenv"

dotenv.config()

const signupController =async (req, res, next) => {
    
    const user = await signupService(req.body);
    if (!user.success) {
       return res.status(409).json({
            success: false,
            message: "An account with this email already exists."
        })
    }
        res.cookie("token", user.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge:24 * 60 * 60 * 1000
    })
    res.status(201).json({
        success: true,
        message: "Account created successfully.",
    }) 
}
export default signupController;