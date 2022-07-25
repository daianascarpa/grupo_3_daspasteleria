function userLoggedMiddleware (req, res, next) {
    
    res.locals.isLogged = false;

    if (req.session && req.session.usuarioLoguearse) {
        res.locals.isLogged = true;
        res.locals.usuarioLoguearse = req.session.usuarioLoguearse;
        }
    next();
    }
    module.exports = userLoggedMiddleware;