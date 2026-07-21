
import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    fullName: {
        type: "string",
        required: true,
        trim: true,
        minlength:3
    },
    email: {
        type: "string",
        required: true,
        trim: true,
        unique: true,
        lowercase:true
    },
    password: {
        type: "string",
        required: true,
        minlength:8
    },
    profileImage: {
        type: "string",
        default: "", 
    },
    currency: {
        type: "string",
        default:"INR"
    }


}, { timestamps: true })

const User =mongoose.model("User", userSchema)

export default User;