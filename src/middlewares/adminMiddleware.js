function adminMiddleware(req, res, next) {
    if(req.session.usuarioAdmin) {
        //console.log(req.session.usuario)
        next();
    } else {
        res.redirect('/')
    }
}

module.exports = adminMiddleware;