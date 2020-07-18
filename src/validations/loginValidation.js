const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');


module.exports = [
    check('email')
        .isEmail().withMessage('Esto no esta ni cerca de ser un email, bro'),
    check('password')
        .isLength({min: 6}).withMessage('Dale, poné una contraseña digna')
]