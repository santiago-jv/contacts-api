const {body} = require('express-validator')

module.exports = [
    
    body('email').normalizeEmail().isEmail().withMessage("Este campo debe ser un correo electrónico"),
    body('password').isLength({min:8}).withMessage("Este campo debe tener 10 cifras."),
]