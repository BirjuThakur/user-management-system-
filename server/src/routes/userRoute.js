import express from "express";
import { allUsers, createUser, deleteUser, singleUser, updateUser } from "../controllers/userController.js";
const userRoute = express.Router();

userRoute.get("/",(req,res)=>{
    res.send("hello user")
});

userRoute.post("/createuser",createUser);

userRoute.get("/singleuser/:userid",singleUser);

userRoute.get("/allusers",allUsers);

userRoute.put("/updateuser/:userid",updateUser);

userRoute.delete("/deleteuser/:userid",deleteUser);

export default userRoute;