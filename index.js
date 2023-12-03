const express = require("express")
const cores = require("cors");
const connect = require("./config/db");


// create express app
const app = express()

// middlewers
app.use(express.json());
app.use(cores())




// mongoDB connection

app.listen(4500,async()=>{
    try{
        await connect
        console.log("connected to DB")
    }catch(err){
        console.log("not connected to db")
        console.log(err)
    }

    console.log('port 4500 running')
})