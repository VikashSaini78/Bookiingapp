const mongoose = require("mongoose")


 
const dbconnect = async()=>{
   try{
         const connection = await mongoose.connect(process.env.MONGOOD_URL)
         console.log('DB successfuly connect')
    }catch(error){
        console.log(error)
    }
    
}
module.exports = dbconnect