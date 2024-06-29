import Posts from '../models/post.js'

export const getPost = async (req, res) => {
	const { id } = req.params
	try {
		const post = await Posts.findById(id)
		res.status(200).json(post)
		}catch (error) {
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

// update post
export const deletePost = (req, res) => {
	const { id } = req.params
	try {
		const post = posts.find((post) => post.id == id)
		if (post) {
			res.status(200).json(post)
		} else {
			res.status(404).json({ error: 'Post not found' })
		}
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}


