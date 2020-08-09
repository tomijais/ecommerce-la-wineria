function userMiddleware(req, res, next) {
    if(req.session.usuarioU) {
        //console.log(req.session.usuario)
        next();
    } else if(req.session.usuarioA){
        next();
    } else {
        res.redirect('/')
    }
}

module.exports = userMiddleware;