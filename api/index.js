import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config({
    path: './.env'
})

const PORT = 9000;

const app = express()



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


import homeRouter from '../routes/home.routes.js'



app.use("/api/v1/home", homeRouter)

app.listen(PORT, () => {
    console.log(`⚙️ Server is running at port : ${ PORT}`);
})

// http://localhost:8000/api/v1/home/

export {app}