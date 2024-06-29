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

export const getUser = (req, res) => {
	const { id } = req.params
	try {
		const user = users.find((user) => user.id == id)
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

export const getUsers = (req, res) => {
	try {
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
