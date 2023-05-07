const express= require('express');
const app= express();// this retrun a function 
const path= require('path');
const mainRouter = require('./routes/index');


app.set('view engine','ejs');







app.use(mainRouter);
// server is created successfully 
const port = process.env.port||3000;
app.listen(port,()=>{
    console.log(`server is running on port  ${port}...`);
});


