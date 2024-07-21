import mongoose, { Schema } from 'mongoose'

const userSchema = Schema(
	{
		name: { type: String, required: true },
		email: {
			type: String,
			required: [true, 'Please provide an email'],
			unique: true,
			match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Provide a valid email address'],
        },
        password: {type:String , required:true},
		age: { type: Number, min: 18, max: 65 },
		gender: { type: String, enum: ['male', 'female'] },
	},
	{ timestamps: true }
)

export default mongoose.model('users', userSchema)
