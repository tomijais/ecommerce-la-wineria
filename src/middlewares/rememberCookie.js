let db = require("../database/models");
const User = require("../database/models/User");

function rememberCookie(req, res, next) {



  db.User.findAll().then(function (usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].id == req.cookies.remember) {
        let usuarioALoguear = usuarios[i];
        if (usuarios[i].category == 1) {
          req.session.usuarioAdmin = usuarioALoguear;
        } else {
          req.session.usuario = usuarioALoguear;
        }
      }
    }
  });
  next();
}

module.exports = rememberCookie;