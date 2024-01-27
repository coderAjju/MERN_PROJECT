const home = async (req,res)=>{
    try{
        console.log(req.body)
        res.status(200).json({msg:req.body})
    }
    catch(err){
        res.status(400).send({msg:"page not found"})
    }
}


const register = async (req,res)=>{
    try{
        res.status(200).send("controller is set on register page")
    }
    catch(err){
        res.status(400).send({msg:"page not found"})
    }
}


module.exports = { home , register }