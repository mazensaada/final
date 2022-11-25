const  mongoose  = require("mongoose");
require("dotenv").config()

const connectDB=async()=>{
    try{
        mongoose.connect(process.env.DB_URI);
        console.log("database is coonected")
    }catch(error){
        console.log("database is not coonected")
    }
};
module.exports=connectDB;
