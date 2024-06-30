import Users from "../models/user.js"
import mongoose from "mongoose"

//Find User by id

export const getUser = async (req, res) => {
	const { id } = req.params
	try {
		const user = await Users.findById(id)
		if (user) {
			res.status(200).json(user)
		}
		else {
			res.status(404).json({error: "User not found"})
		}
	} catch (error) {
		res.status(500).json({ error: error.message })
		
	}
}

//Find user

export const getUsers = async (_, res) => {
	try {
		const users = await Users.find()
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}


//createUser

export const createUser = async (req, res) => {
	const user = req.body
	try {
		const newUser = new Users(user)
		await newUser.save()

		res.status(201).json(newUser)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

//delete user

export const deleteUser = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedUser = await Users.findByIdAndDelete(new mongoose.Types.ObjectId({ id }))
		res.status(201).json(deletedUser)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
 }