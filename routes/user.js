const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const authentication = require('../middlewares/authentication');
const handleErrors = require('../middlewares/handleErrors')
const handleNotFound = require('../middlewares/handleNotFound')
const registerValidator = require('../libs/validators/registerValidator');
const loginValidator = require('../libs/validators/loginValidator');
const validations = require('../middlewares/validations');

//routes 
router.post('/register',registerValidator,validations,UserController.createUser)
router.post('/login',loginValidator,validations,UserController.loginUser)
router.get('/user',authentication,UserController.getUserInformation)

//middlewares
router.use(handleErrors)
router.use(handleNotFound)

module.exports = router;