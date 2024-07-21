import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { AuthRoutes, CommentRoutes, PostRoutes, UserRoutes } from './routes/index.js'
import { logger } from './middlewares/logger.js'

dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(logger)

app.use('/users', UserRoutes)
app.use('/posts', PostRoutes)
app.use('/comments', CommentRoutes)
app.use('/auth', AuthRoutes)

app.get('/', (_, res) => res.send('Welcome to Phoenix'))

mongoose
	.connect(process.env.MONGO_URI)
	.then(console.log('Connected to database 🌍'))
	.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(`Server did not connect \n${error}`))