import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import dbConnection from "./db/dbConnection.js";
const port = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user",userRoute);

app.get("/",(req,res) =>{
    res.send("hello")
});

app.listen(port,()=>{
    dbConnection();
    console.log(`app running on port ${port}`)
})
