import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { UserRoutes } from './routes/index.js'

dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use("/users" , UserRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

app.get('/', (_, res) => res.send('Welcome to Phoenix'))
