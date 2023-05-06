const express= require('express');
const path = require('path');

const app= express();// this retrun a function 

// here we see the how to create the routs 

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'index.html',));
// })

// app.get('/about',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'about.html',));
// })



// static middle ware 

app.use(express.static('public'));


// server is created successfully 
const port = process.env.port||3000;
app.listen(port,()=>{
    console.log(`server is running on port  ${port}...`);
});