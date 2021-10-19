const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    first_name:{required:true, type:String},
    last_name:String,
    date:{default:new Date(), type:Date},
    email:{ type:String, required:true, unique:true },
    password:{ type:String, required:true },
})

UserSchema.set('toJSON',{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
        delete returnedObject.email
        delete returnedObject.date 
    }
})

const User = new model('User', UserSchema)

module.exports = User
