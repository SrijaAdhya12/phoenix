import express from 'express'
import { createComment, getComments, getComment } from '../controllers/comments.js'

const router = express.Router()
router.get('/', getComments)
router.get('/:id', getComment)
router.post('/', createComment)

export default router

