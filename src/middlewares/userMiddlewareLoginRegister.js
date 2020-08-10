function userMiddleware(req, res, next) {
  if (req.session.usuario) {
    res.redirect("/");
  } else if (req.session.usuarioAdmin) {
    res.redirect("/");
  } else {
    next();
  }
}

module.exports = userMiddleware;
