const froneEndCheck = (req, res, next) => {
    if(req.headers.origin === "http://localhost:5173"){
        next();
    }else{
        res.json("You are not authenticated")
    }
}

module.exports = froneEndCheck;