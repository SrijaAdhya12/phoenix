export const userLogger = (req, _, next) => {
	const { name, age, gender } = req.body
	const { id } = req.params
	console.log(`User{
        id: ObjectId('${id}'),
        name: "${name}",
        age: ${age},
        gender: "${gender}"
    }`)
	next()
}
