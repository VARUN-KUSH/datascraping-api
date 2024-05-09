import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

const PORT = 9000;

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))



import homeRouter from '../routes/home.routes.js'



app.use("/api/v1/home", homeRouter)

app.listen(process.env.PORT || PORT, () => {
    console.log(`⚙️ Server is running at port : ${process.env.PORT || PORT}`);
})

// http://localhost:8000/api/v1/home/

export {app}