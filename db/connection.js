const mongoose=require("mongoose")

function conn(){
    url="mongodb://localhost:27017"
    mongoose.connect(url)
    .then(()=>{
        console.log("connected to database")
    })
    .catch((err)=>{
        console.log("Error occured while connecting to database")
    })

}

module.exports=conn

// [{productId:123,quantity:10,operation:”add”},

// {productId:143,quantity:14,operation:”add”},

// {productId:193,quantity:17,operation:”subtract”}]
