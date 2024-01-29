const User = require("../models/user_model.js")

const home = async (req,res)=>{
    try{
        res.status(200).json({msg:req.body})
    }
    catch(err){
        res.status(400).send({msg:"page not found"})
    }
}


const register = async (req,res)=>{
    try{
        const {name,email,phone,password} = req.body

        const userExits = await User.findOne({email:email});

        if(userExits){
            res.status(404).send({msg:"email already exist"})
        }
        else{
            await User.create({name,email,phone,password})
            res.status(200).send("data send successfully")
        }
    }
    catch(err){
        res.status(400).send({msg:"page not found"})
    }
}


module.exports = { home , register }