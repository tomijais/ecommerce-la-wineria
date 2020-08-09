function adminMiddleware(req, res, next) {
    if(req.session.usuarioA) {
        //console.log(req.session.usuario)
        next();
    } else {
        res.redirect('/')
    }
}

module.exports = adminMiddleware;