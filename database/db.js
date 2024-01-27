const mongoose = require('mongoose')

let URI = process.env.MONGODB_URI;

const connectDB = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection successful")
    }
    catch(err){
        console.log("connection unsuccessful")
    }
}

module.exports = connectDB;

