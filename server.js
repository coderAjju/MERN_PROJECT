require('dotenv').config()
const express = require('express')
const app = express();
const route = require("./router/auth-router.js")
const db = require("./database/db.js")
app.use(express.json())

app.use("/api/auth",route);

app.get("/",(req,res)=>{
    res.send("hello this is home page")
})
app.get("/home",(req,res)=>{
    res.send("hello this is home page")
})

db().then(()=>{
    app.listen(4000,()=>{
        console.log("server is running...")
    })
})