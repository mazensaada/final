const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const ProduitShema = new Schema({
    name:{
        type:String,
        
    },
    prix:{
        type:Number,
        
    },
     coleur:{
       type:String,
        
    },
    type:{
        type:String,   
    },
    image:{
        type:String,
    },
    
},{timestamps:true});

module.exports=mongoose.model("Produit",ProduitShema);