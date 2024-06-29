const posts = [
	{
		id: '100',
		title: 'Vacation',
		authorId: '0b1234',
	},
	{
		id: '101',
		title: 'Trip',
		authorId: '0b1234',
	},
	{
		id: '102',
		title: 'College',
		authorId: '0b1234',
	},
]

export const getPost = (req, res) => {
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

export const getPosts = (req, res) => {
	try {
		res.status(200).json(posts)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

//Create Post

export const createPost = (req, res) => {
	const post = req.body
	try {
		const { id, title, authorId } = post
		const found = posts.find((post) => post.id == id)
		if (found) {
			res.status(403).json({ error: 'Post already exits with this id' })
		} else {
			posts.push({id , title , authorId})
			res.status(201).json(post)
		}
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

// array1 = [2, 3, 4, 1]
// found = array1.find((i) => i == 4)
