import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    mobileno:{type:Number},
    address:{type:String},
    date: {
        type: Date,
        default: Date.now(),
    }
});

const User = mongoose.model("User",userSchema);

export default User;