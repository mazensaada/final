const express=require("express");
const cors=require("cors");
const connectDB=require("./confg/dbConnect");
const User = require("./models/User");
const app=express();

require("dotenv").config();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/user",require("./routes/user"));
app.use("/produit", require("./routes/produit"));



const PORT=process.env.PORT;

app.listen(5000,(err)=>
err?console.log(err):console.log(`server is runinig on ${PORT}`)
);

