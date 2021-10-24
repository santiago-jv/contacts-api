const {body} = require('express-validator')

module.exports = [
    body('first_name').isLength({min:2, max:150}).withMessage("Este campo debe estar entre 2 a 150 caracteres."),
    body('last_name').isLength({max:150}).withMessage("Este campo debe tener máximo 150 caracteres")
]