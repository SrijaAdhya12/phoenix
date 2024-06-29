export const getComments = (req, res) => {
    try { 
        const comments = [
			{
				id: '201',
				comment: 'nice',
				userId: '0b1235',
				postId: '100',
			},
			{
				id: '202',
				comment: 'cool',
				userId: '0b1235',
				postId: '101',
			},
			{
				id: '203',
				comment: 'beautiful',
				userId: '0b1235',
				postId: '102',
			},
		]
        res.status(200).json(comments)
    } catch (error) {
       res.status(400).json(comments)
    }
}