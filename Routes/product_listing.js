const router=require('express').Router()
const PRODUCTS=require("../model/schema")


router.post('/',async (req,res)=>{
    console.log(req.body)

    let products=await PRODUCTS.create({
        "productId":req.body.productId,
        "productName":req.body.productName,
        "quantity":req.body.quantity
    })
    products.save()
    .then((data)=>{
        res.status(200).json({"message":data})
    })
    .catch((err)=>{
        res.status(501).json({"message":err})
    })
    // res.status(200).json({"message":"Post operation successfull"})
})

router.get("/:id",async(req,res)=>{

    const data=await PRODUCTS.find({"_id":req.params.id})
    .then((data)=>{
        res.status(200).json({"message":data})
    })
    .catch((err)=>{
        res.status(200).json({"message":err})
    })
    
})

router.put("/update/:id",async(req,res)=>{

    console.log("inside update")
    const data=await PRODUCTS.updateOne({"_id":req.params.id},req.body)
    // data.save()
    .then((data)=>{
        res.status(200).json({"message":data})
    })
    .catch((err)=>{
        res.status(200).json({"message":err})
    })
    
})

router.delete("/delete/:id",async(req,res)=>{
    console.log("inside delete")
    const prod=await PRODUCTS.deleteOne({"_id":req.params.id})
    .then((success)=>{

        res.status(200).json({"message":success})
    })
    .catch((err)=>{
        res.status(200).json({"message":err})

    })
})

module.exports=router