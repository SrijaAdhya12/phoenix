import Comments from "../models/comments.js"
import mongoose from "mongoose"

//find all comments

export const getComments = async (req, res) => {
	try {
		const comments = await Comments.find()
		res.status(200).json(comments)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

//find all comments by id

export const getComment = async (req, res) => {
	const { id } = req.params
	try {
		const comment= await Comments.findById(id)
		if (comment) {
			res.status(200).json(comment)
		} else {
			res.status(404).json({ error: 'Comment not found' })
		}
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}


//Create comment

export const createComment = async (req, res) => {
	const comment = req.body
	try {
		const newComment = new Comments(comment)
		await newComment.save()
		res.status(201).json(newComment)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}