import mongoose, { Schema } from 'mongoose'

const postSchema = Schema(
	{
		title: { type: String, required: true },
		authorId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
		likeCount: { type: Number, default: 0 },
		media: { type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg' },
	},
	{ timestamps: true }
)

export default mongoose.model('posts', postSchema)
