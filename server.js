require('dotenv').config()
const express = require('express')
const app = express();
const route = require("./router/auth-router.js")
const db = require("./database/db.js")
app.use(express.json())

app.use("/api/auth",route);


db().then(()=>{
    app.listen(4000,()=>{
        console.log("server is running...")
    })
})