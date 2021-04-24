const express = require('express')

const app = express()

// GET, PUT,POST,DELETE
//req -> request
//res -> response
app.get('/',(req,res)=>{
    res.send("Hey Server Is Started!")
})

const port = 8082
app.listen(port,function(){
    console.log(`Listening on Port: ${port}`)
})