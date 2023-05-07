const apiKey = require('../middlewares/apikey');

// first  have to import the const express = require('express')
const router = require('express').Router();

const apiKeyMiddleware = require('../middlewares/apikey')

router.use(apiKeyMiddleware);
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

router.get('/api/products',(req,res)=>{
    res.json([
        {
        id:'123',
        name:"chrome"
        },
        {
            id:'124',
             name:"firefox"
        },
        {
            id:'125',
            name:"safari"
        }
        ,
        {
            id:'126',
            name:"opera"
        },
        

])
});

//export the router

module.exports = router;