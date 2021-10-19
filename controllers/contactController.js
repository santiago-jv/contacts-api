const ContactController = {}
const Contact = require('../models/Contact');
const {validationResult } = require('express-validator')

ContactController.getContacts = async (request,response,next) => {
    const id = request.id
    try {
        const data = await Contact.find({user_id:id})
        return response.json(data)
    } catch (error) {
        next(error)
    }
}
ContactController.getContact = async (request,response,next) => {
    const {id} = request.params;
    
    try {
        const contact = await Contact.findById(id);
        if (!contact)
            return response.status(404).json({message: 'Contact not found.'})
        return response.status(200).json(contact)
    } catch (error) {
        next(error)
    }
}
ContactController.createContact = async (request,response,next) => {
    const {first_name, last_name, phone_number} = request.body
    const {id}=request
    try {
        const contact = await Contact.create({
            first_name, last_name, phone_number,user_id:id
        })
        return response.json({
            message: 'Contact created successfully',
            contact
        })
    } catch (error) {
        next(error)
    }   

}
ContactController.updateContact = async (request,response,next) => {
    const contactInfo = request.body
    const {id} = request.params;

    try {
        const contactUpdated = await Contact.findByIdAndUpdate(id,contactInfo,{new:true})
        return response.json({
            message: 'Contact updated successfully.',
            contact: contactUpdated
        })
    } catch (error) {
        next(error)
    }   

}

ContactController.deleteContact = async (request,response,next) => {
    const {id} = request.params;
    
    try {
        const contact = await Contact.findByIdAndRemove(id);
        return response.status(200).json(contact);
    } catch (error) {
        next(error)
    }
}
module.exports = ContactController