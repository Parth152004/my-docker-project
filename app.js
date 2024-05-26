const express = require('express')
const app = express();
const port = 6000;

app.get('/',(req,res)=>{
    res.send("hello from parth in docker");
})

app.listen(port,()=>{
    console.log(`app is start in port ${port}`)
})