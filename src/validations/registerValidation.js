const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
let db = require('../database/models');
const User = require('../database/models/User');

//let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
//usuarios = JSON.parse(usuarios);

module.exports = [
    check('email').isEmail().withMessage('Esto no esta ni cerca de ser un email, Bro'),
    body('email').custom(function(value) {
      db.User.findAll()
      .then(function(usuarios){
        for(let i = 0; i < usuarios.length; i++) {
          if(usuarios[i].email == value) {
            return false;
          }
        }
        return true
      })

    }).withMessage('Este mail ya está registrado!'),
    check('password').isLength({min: 6}).withMessage('Dale, poné una contraseña digna')
];