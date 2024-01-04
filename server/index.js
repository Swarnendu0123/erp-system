const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')
const {User} = require('./db/index.js');

app.use(cors())

// app.use("/",(req, res, next)=>{
//     if(req.headers.origin === "http://localhost:5173"){
//         next();
//     }else{
//         res.json("You are not authenticated")
//     }
// })

app.post('/signup', (req, res) => {
    const {email, password} = req.headers;
    //validate
    const newUser = new User({email, password});
    try{
        newUser.save();
        res.json("User created");
    }catch(err){
        res.json(err.message);
    }
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);