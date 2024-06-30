import Comments from '../models/comments.js'

// find all comments
export const getComments = async (_, res) => {
	try {
		const comments = await Comments.find()
		res.status(200).json(comments)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

// find all comments by id
export const getPostComments = async (req, res) => {
	const { postId } = req.params
	try {
		const comment = await Comments.find({ postId })
		res.status(200).json(comment)
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
