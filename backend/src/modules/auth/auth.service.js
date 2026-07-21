import User from "./user.model.js"
import hashPassowrd from "../../utils/hashPassword.js"
import generateToken from "../../utils/generateToken.js"

const signupService = async (userData) => {
    const user = await User.findOne({ email: userData.email });
    if (user) {
        return {
            success: false,
        }

    } 
    const hashedPassword = await hashPassowrd(userData.password);
    
    const newUser = await User.create({
        ...userData,
        password: hashedPassword
    })  

    const token = generateToken(newUser);
    return {
        success:true,
        token
    }


}
export default signupService;