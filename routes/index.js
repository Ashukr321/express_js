
// first  have to import the const express = require('express')
const router = require('express').Router();


// here we create our all the router    
router.get('/',(req,res)=>{
    res.render('about',{
        title:'this is about '
    });
});


router.get('/about',(req,res)=>{
    res.render('index',{
        title:'this is index '
    });
})


//export the router

module.exports = router;