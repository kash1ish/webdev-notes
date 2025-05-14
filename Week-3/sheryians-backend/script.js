const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("middleware");
    next();
})
app.use(function(req,res,next){
    console.log("middleware2");
    next();
})

app.get("/",(req,res)=>{
    res.send(" hello World");
})

app.get("/profile",(req,res)=>{
    res.send(" hello kashish");
})

app.listen();
