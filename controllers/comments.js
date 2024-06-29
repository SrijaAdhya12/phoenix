const comments = [
	{
		id: '201',
		message: 'nice',
		userId: '0b1235',
		postId: '100',
	},
	{
		id: '202',
		message: 'cool',
		userId: '0b1235',
		postId: '101',
	},
	{
		id: '203',
		message: 'beautiful',
		userId: '0b1235',
		postId: '102',
	},
	{
		id: '203',
		message: 'beautiful',
		userId: '0b1235',
		postId: '102',
	},
	{
		id: '203',
		message: 'beautiful',
		userId: '0b1235',
		postId: '102',
	},
]

export const getComments = (req, res) => {
	try {
		res.status(200).json(comments)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

//Create comment

export const createComment = (req, res) => {
	const comment = req.body
	try {
		const { id, message, userId, postId } = comment
		const found = comments.find((comment) => comment.id == id)
		if (found) {
			res.status(403).json({ error: 'Comment already exits with this id' })
		} else {
			comments.push({ id, message, userId, postId })
			res.status(200).json(comment)
			
		}
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}