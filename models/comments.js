import mongoose, { Schema } from 'mongoose'

const commentSchema = Schema(
	{
		message: { type: String, required: true },
		authorId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
		postId: { type: Schema.Types.ObjectId, ref: 'posts', required: true },
	},
	{ timestamps: true }
)

export default mongoose.model('comments', commentSchema)
