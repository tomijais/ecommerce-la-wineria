const fs = require ('fs');
const path = require ('path');
const bcrypt = require ('bcrypt');

let usuariosJson = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf-8');
let usuarios = JSON.parse(usuariosJson);

let usersController = {
  index: (req, res, next) => {
    res.send('bienvenido usuario')
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