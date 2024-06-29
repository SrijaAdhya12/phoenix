import express from "express"
import cors from "cors"
const app = express()

app.use(cors())

app.listen(5000, () => console.log(`Server running on port ${5000}`))

app.get("/" , (_,res) => res.send("Welcome to Phoenixs"))