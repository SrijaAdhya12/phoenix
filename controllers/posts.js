import Posts from '../models/posts.js'

export const getPost = async (req, res) => {
	const { id } = req.params
	try {
		const post = await Posts.findById(id)
		res.status(200).json(post)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const getPosts = async (_, res) => {
	try {
		const posts = await Posts.find()
		res.status(200).json(posts)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

//Create Post
export const createPost = async (req, res) => {
	const post = req.body
	try {
		const newPost = new Posts(post)
		await newPost.save()

		res.status(201).json(newPost)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}


// delete post
export const deletePost = async (req, res) => {
	const { id } = req.params
	try {
		const deletedPost = await Posts.findByIdAndDelete(id)
		res.status(201).json(deletedPost)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

// update a post
export const updatePost = async (req, res) => {
	const { id } = req.params
	const post = req.body
	try {
		const allowedKeys = ['title', 'media']
		const postKeys = Object.keys(post)
		if (postKeys.filter((key) => !allowedKeys.includes(key)).length > 0) {
			return res.status(442).json({ error: 'Invalid fields present in the body' })
		}
		await Posts.findByIdAndUpdate(id, post)
		await getPost(req, res)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
