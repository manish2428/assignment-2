const mongoose=require("mongoose")

let sch=new mongoose.Schema({
productId:{
    type:String,
    required:true
},
productName:{
    type:String,
    required:true
},
quantity:{
    type:Number,
    required:true 
}
})
let PRODUCTS=mongoose.model("PRODUCTS",sch);

module.exports=PRODUCTS


// jatinupadhyay@buyume.io