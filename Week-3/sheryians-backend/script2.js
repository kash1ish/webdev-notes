const express = require('express');
const app = express();


//app.use(function(req,res,next){
    //req - mein sara data hot hai aane wale user ki request ki taraf ka, jaise ki uski location etc
    //res - controls hota hai jinke basis pe hum server se response bheje hai 
    //next- it is just push so that our request moves to the next thing which should be executed
//})
app.set("view engine","ejs");
app.use(express.static("./public"));

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/profile",(req,res)=>{
    res.send("Hello from profile");
})


app.listen(3000);