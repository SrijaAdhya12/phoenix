import express from "express"
import { createPost, deletePost, getPost, getPosts, updatePost, replacePost} from "../controllers/posts.js"

const router = express.Router()

router.route('/').get(getPosts).post(createPost)
router.route('/:id').get(getPost).delete(deletePost).patch(updatePost).put(replacePost)

export default router