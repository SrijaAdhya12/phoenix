import mongoose, { Schema } from 'mongoose'

const commentSchema = Schema(
	{
		message: { type: String, required: true },
		authorId: { type: Schema.Types.ObjectId, ref: 'users' },
		postId: { type: Schema.Types.ObjectId, ref: 'posts' },
	},
	{ timestamps: true }
)

export default mongoose.model('comments', commentSchema)
