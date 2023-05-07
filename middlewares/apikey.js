function apiKey(req,res,next){
    const api_key = '1234567';
    // here we check and validate the pai key 
    if(req.query.api_key === api_key){
            next();
        }
        else{
            res.status(401).json({message: 'Invalid API Key'});
        }
}

module.exports= apiKey;