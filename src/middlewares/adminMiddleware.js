function adminMiddleware(req, res, next) {
    if(req.session.user) {
        if(req.session.user.category === 1){
            res.locals.localAdmin =  req.user 
            next();        
        }else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
}

module.exports = adminMiddleware;