const express = require('express')
const connectDB = require('./config/config')
require('dotenv').config()
const app = express()

connectDB()


// GET, PUT,POST,DELETE
//req -> request
//res -> response
//This Comment is for testing Git
//We are doing this to pull the changes
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

