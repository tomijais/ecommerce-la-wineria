const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
let db = require('../database/models');
const User = require('../database/models/User');

module.exports = [
    check('email').isEmail().withMessage('Por favor ingrese un email valido'),
    body('email').custom(function(value) {
      db.User.findAll()
      .then(function(usuarios){
        for(let i = 0; i < usuarios.length; i++) {
          if(usuarios[i].email == value) {
            return true;
          }
        }
        return false
      })

    }).withMessage('Flasheaste bro'),
    check('password').isLength({min: 6}).withMessage('El campo debe tener al menos 6 caracteres')
];