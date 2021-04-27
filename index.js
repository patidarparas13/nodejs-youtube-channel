const express = require('express')
require('dotenv').config()
const app = express()


// GET, PUT,POST,DELETE
//req -> request
//res -> response
if(process.env.ENVIRONMENT=='development'){
    app.get('/',(req,res)=>{
        res.send("Hey Server Is Started For Dev!")
    })
    
}else{
    app.get('/',(req,res)=>{
        res.send("Hey Server Is Started For Prod!")
    })
    
}


const port = process.env.PORT
app.listen(port,function(){
    console.log(`Listening on Port: ${port}`)
})

