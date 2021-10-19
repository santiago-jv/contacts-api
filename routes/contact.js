const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');
const authentication = require('../middlewares/authentication');
const handleErrors = require('../middlewares/handleErrors')
const handleNotFound = require('../middlewares/handleNotFound')
const validator = require('../libs/validators/contactValidator');
const validations = require('../middlewares/validations');

router.use(authentication)
router.get('/contacts',ContactController.getContacts)
router.get('/contacts/:id',ContactController.getContact)
router.post('/contacts',validator,validations,ContactController.createContact)
router.put('/contacts/:id',validator,validations,ContactController.updateContact)
router.delete('/contacts/:id',ContactController.deleteContact)

//middlewares
router.use(handleErrors)
router.use(handleNotFound)

module.exports = router;