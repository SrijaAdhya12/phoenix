export const getPosts = (req, res) => {
    try {
        const posts = [
			{
				id: '100',
				title: 'Vacation',
				authorId: '0b1234'
            },
            {
				id: '101',
				title: 'Trip',
				authorId: '0b1234'
            },
            {
				id: '102',
				title: 'College',
				authorId: '0b1234'
			},
        ]
        res.status(200).json(posts)
        
    } catch (error) {
       res.status(500).json({ error: error.message })
    }
}