import bcrypt from "bcryptjs"
import Users from "../models/users.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const secret = process.env.TOKEN_SECRET

export const signIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUser = await Users.findOne({email})
        if (!existingUser) {
			return res.status(404).json({ error: 'User not found with this email' })
        }
        const isValidPassword= await bcrypt.compare(password, existingUser.password)
        if (!isValidPassword) {
			return res.status(404).json({ error: 'Invalid Credentials' })
        }
        const token = jwt.sign({ email, id: existingUser._id }, secret, { expiresIn: '1h' })
        res.status(200).json({ result: existingUser, token })
    } catch (error) {
		res.status(500).json({ error: error.message })
    }
}

export const signUp = async (req, res) => {
    const { name, email, password, gender, age } = req.body
    try {
        if (password.length < 6) {
            return res.status(409).json({error: "password must be greater than 6 characters"})
        } 
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = new Users({
            name, email, password: hashedPassword, gender, age
        })
        await newUser.save()
        const token = jwt.sign({ email, id: newUser._id }, secret, { expiresIn: '1h' })
        res.status(200).json({result: newUser, token})
    } catch (error) {
		res.status(500).json({ error: error.message })
    }
}