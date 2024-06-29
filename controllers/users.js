export const getUsers = (req, res) => {
	try {
		const users = [
			{
				id: '0b1234',
				name: 'Srija Adhya',
				age: 20,
			},
			{
				id: '0b1235',
				name: 'Pritam Kundu',
				age: 22,
			},
			{
				id: '0b1236',
				name: 'Elle Shaw',
				age: 14,
			},
		]
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
