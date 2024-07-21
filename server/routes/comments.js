import express from 'express'
import { createComment, getComments, getPostComments } from '../controllers/comments.js'

const router = express.Router()
router.route('/').get(getComments).post(createComment)
router.route('/:postId').get(getPostComments)

export default router

