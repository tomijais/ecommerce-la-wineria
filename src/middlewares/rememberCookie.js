let db = require("../database/models");
const User = require("../database/models/User");

function rememberCookie(req, res, next) {



  db.User.findAll().then(function (usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].id == req.cookies.remember) {
          req.session.user = usuarios[i];
      }
    }
  });
  next();
}

module.exports = rememberCookie;