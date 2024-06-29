import express from "express"
import { createUser, getUser, getUsers } from "../controllers/users.js"

const router = express.Router()
router.get("/", getUsers)
router.get("/:id", getUser)
router.post("/", createUser)

export default router