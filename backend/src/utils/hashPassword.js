import bcrypt from "bcrypt"

const hashPassowrd =async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

export default hashPassowrd;