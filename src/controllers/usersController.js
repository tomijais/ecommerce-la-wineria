const fs = require ('fs');
const path = require ('path');
const bcrypt = require ('bcrypt');
const {check, validationResult, body} = require('express-validator');

let usuariosJson = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf-8');
let usuarios = JSON.parse(usuariosJson);

let usersController = {
  index: (req, res, next) => {
    res.send('bienvenido usuario')
  },
  login: (req, res, next) => {
    res.render('login')
  },
  ingresar: (req, res, next) => {
    let errors = validationResult(req);
    if(errors.isEmpty()) {
        for(let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, usuarios[i].password)) {
                return res.redirect('/')
            }
        }
        return res.render('login', {
            errors: {
                email: {
                    msg: 'Credenciales inválidas. Inserta un email registrado y su respectica contraseña'
                }
            }
        })

    } else {
        res.render('login', {
            errors: errors.mapped(),
            old: req.body
        })
    }
},
  register: function(req, res, next) {
    res.render('registro');
  },
  saveUser: function (req, res, next){
    let nuevoUsuario = {
      email: req.body.userEmail,
      password: bcrypt.hashSync(req.body.userPassword, 10),
      avatar: req.files[0].filename
    }

    usuarios.push(nuevoUsuario)
    fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios))
    
    res.redirect('/')
  }
}

module.exports = usersController;