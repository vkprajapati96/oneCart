import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoute.js";
dotenv.config()

let app = express();

let port = process.env.PORT || 6000

app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true, // allow cookies
}));


app.use(express.json())
app.use(cookieParser()
)





app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)


app.listen(port,()=>{
    connectDb();
    console.log(`Port is running at ${port}`)
})