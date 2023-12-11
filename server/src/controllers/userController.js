import User from "../modals/userSchema.js";

export const createUser = async (req,res) =>{
    try {
        const {name,email,mobileno,address} = req.body;
        const userData = new User({name,email,mobileno,address});
        const storeData = await userData.save();
        res.status(201).send({
            success:true,
            message:"user created successfully",
            storeData
        })
    } catch (error) {
        res.status(400).send({
            success:false,
            message:"error getting in user",
            error: error.message
        }) 
    }
}

export const singleUser = async (req,res) =>{
    try {
        const {userid} = req.params;
        const findSingleUser = await User.findById(userid);
        res.status(200).send({
            success:true,
            message:"user got successfully",
            findSingleUser
        })
    } catch (error) {
        res.status(400).send({
            success:false,
            message:"error getting in user",
            error: error.message
        }) 
    }
}

export const allUsers = async (req,res) =>{
    try {
        const {page=1,limit=10,name} = req.query;
        const query = name ? {name :{$regex:new RegExp(name), $options:'i'}}:{};

        const findAllUser = await User.find(query)
        .skip((page-1)*limit)
        .limit(limit);

        // total number of user
        const totalUsers = await User.countDocuments(query);
        const totalPages = Math.ceil(totalUsers/limit)
        res.status(200).send({
            success:true,
            message:"user got successfully",
            findAllUser,
            totalPages,
            currentPage:parseInt(page)
        })
    } catch (error) {
        res.status(400).send({
            success:false,
            message:"error getting in user",
            error: error.message
        }) 
    }
}

export const updateUser = async (req,res) =>{
    try {
        const {userid} = req.params;
        const {name,email,mobileno,address} = req.body;
        const updateSingleUser = await User.findByIdAndUpdate(userid,{
            name,email,mobileno,address
        },{new:true});
        res.status(200).send({
            success:true,
            message:"user got successfully",
            updateSingleUser
        })
    } catch (error) {
        res.status(400).send({
            success:false,
            message:"error getting in user",
            error: error.message
        }) 
    }
}

export const deleteUser = async (req,res) =>{
    try {
        const {userid} = req.params;
        const deleteSingleUser = await User.findByIdAndDelete(userid);
        res.status(200).send({
            success:true,
            message:"user deleted successfully",
            deleteSingleUser
        })
    } catch (error) {
        res.status(400).send({
            success:false,
            message:"error getting in user",
            error: error.message
        }) 
    }
}