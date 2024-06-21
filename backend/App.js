const express = require("express");
const dbconnect = require("./config/db");
const app = express();
require('dotenv').config()







dbconnect('')
console.log(process.env.PORT)
// console.log(process)
app.listen(process.env.PORT,()=>{
    console.log(`server is runing port ${process.env.PORT}🚀`)
})