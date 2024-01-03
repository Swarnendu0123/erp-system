const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')

app.use(cors())

app.use("/", (req,res, next)=>{
const {name, pass} = req.query;
console.log(name, pass);
if(name === "admin" && pass === "admin"){
   next();
}else{
    res.send("You are not authenticated");
}
})

const sum = (a,b) => { 
    return a+b
};

app.get('/api', (req, res) => {
    //print ip adress
    console.log(req.ip);
    const {a, b} = req.query;
    res.json({result: sum(parseInt(a), parseInt(b))});
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);