var db=require('../config/connection')
var collection=require('../config/collections')
const bcrypt = require('bcrypt')
module.exports={
    doSignup:(userData)=>{
        return new Promise(async (resolve, reject )=>{
            userData.passwrord = await bcrypt.hash(userData.passwrord,10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then()
            resolve(data.ops[0])

        })

    }
}