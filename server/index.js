const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
var cors = require('cors')
const {User} = require('./db/index.js');
var hash = require('hash.js')

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",(req, res, next)=>{
    if(req.headers.origin === "http://localhost:5173"){
        next();
    }else{
        res.json("You are not authenticated")
    }
})


app.post('/signup', (req, res) => {    
    let {email, password, confirmPassword} = req.body;
    // validate
    //check if the pass length is greater than 8
    if(password.length < 8){
        return res.json("Password must be greater than 8 characters");
    }
    if(!email || !password || !confirmPassword){
        return res.json("Please enter all the fields");
    }
    if(password !== confirmPassword){
        return res.json("Passwords do not match");
    }
    //hashing
    password = hash.sha256().update(password).digest('hex');
    
    const newUser = new User({email, password});
    try{
        newUser.save();
        res.json("User created");
    }catch(err){
        res.json(err.message);
    }
    }
);

app.post("/signin", async(req, res) => {
  let { email, password } = req.body;
    // validate
    console.log(email, password);
    password = hash.sha256().update(password).digest('hex');
    const user = await User.findOne({email, password});
    if(user){
        res.json(user.email);
    }
    else{
        res.json("User not found");
    }
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);