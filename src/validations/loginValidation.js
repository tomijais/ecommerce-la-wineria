const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
let db = require('../database/models');
const User = require('../database/models/User');

module.exports = [
    check('email').isEmail().withMessage('Por favor ingrese un email valido'),
    body('email')
      .custom(function(value) {
        return db.User.findOne(
          {
              where: {email: value}
          })
          .then(function(result) {
              if(!result) {
                  return Promise.reject('Flasheaste bro')
              }
          })
          
      
  }),
    check('password').isLength({min: 6}).withMessage('El campo debe tener al menos 6 caracteres')
];