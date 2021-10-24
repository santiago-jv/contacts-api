const {body} = require('express-validator')

module.exports = [
    body('first_name').isLength({min:2, max:150}).withMessage("This field must be between 2 to 150 characters."),
    body('last_name').isLength({max:150}).withMessage("This field must have a maximum of 150 characters.")
]