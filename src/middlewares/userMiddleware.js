function userMiddleware(req, res, next) {
    if(req.session.usuario) {
        //console.log(req.session.usuario)
        next();
    } else if(req.session.usuarioAdmin){
        next();
    } else {
        res.redirect('/')
    }
}

module.exports = userMiddleware;