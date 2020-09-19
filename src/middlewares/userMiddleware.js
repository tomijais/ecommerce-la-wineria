function userMiddleware(req, res, next) {
    if(req.session.user) {
        res.locals.localUser = req.user 
        next();              
    } else {
        res.redirect('/')
    }
}

module.exports = userMiddleware;