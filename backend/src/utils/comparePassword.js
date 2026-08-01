import bcrypt from "bcrypt"
const comparePassword = (plainPassword,hashedPassword) => {
    const isMatch = bcrypt.compare(plainPassword, hashedPassword);
    if (isMatch) {
        return true;
    }
    return false;
}
export default comparePassword