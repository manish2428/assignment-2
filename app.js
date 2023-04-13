let express=require("express")
let app=express()
let conn=require("./db/connection")
const all_routes=require("./Routes/product_listing")
const cors=require("cors")
const bp=require("body-parser")


//middlewares
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors())
app.use("/product",all_routes)


conn()
app.listen(8000,(err)=>{
    if(!err){
        console.log("Server is running on port 8000");
    }
})