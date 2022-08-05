function authMiddleware (req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect ("/Usuarios/login");
    }
    next();
    }
    module.exports = authMiddleware;