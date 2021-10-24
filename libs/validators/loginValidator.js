const {body} = require('express-validator')

module.exports = [
    
    body('email').normalizeEmail().isEmail().withMessage("This field must be an email."),
    body('password').isLength({min:8}).withMessage("This field must have 10 digits."),
]