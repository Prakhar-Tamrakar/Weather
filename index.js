const express = require("express");
const path = require("path");
const app = express();
// const port = 3000;
const pathC = path.join(__dirname,"../public");
app.use(express.static(pathC));
app.get("/",(req,res)=>{
    res.send("welcome to home page");
});
app.get("/about",(req,res)=>{
    res.status(200).send("welcome to about page bhai");
});
app.get("/contact",(req,res)=>{
    res.status(200).send("welcome to contact page");
});
app.listen(8000 ,() => {
    console.log(`listening to the port number 8000`)
});