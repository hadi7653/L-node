var db=require('../config/connection')
var collection=require('../config/collections')

module.exports={

    addProduct:(product,callback)=>{
        // console.log("product");
        // console.log(product);

        db.get().collection('product').insertOne(product).then((data)=>{
            // console.log("data");
            // console.log(data.insertedId);            
            callback(data.insertedId.toString())
        }).catch((err)=>{
            // console.log("this is error");
            // console.log(err);
        })
    },
     getAllProducts:()=>{
        return new Promise((resolve,reject)=>{
            let products=  db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }
} 