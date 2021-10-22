const { Schema, model } = require("mongoose");

const ContactSchema = new Schema({
    profile_image:{required:true, type:String},
    first_name:{required:true, type:String},
    last_name:String,
    date:{default:new Date(), type:Date},
    phone_number:String,
    user_id:{type:Schema.Types.ObjectId, ref:'User'}
})

ContactSchema.set('toJSON',{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.user_id
    }
})

const Contact = new model('Contact', ContactSchema)

module.exports = Contact
