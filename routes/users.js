import express from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js'

const router = express.Router()
router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser)

export default router
