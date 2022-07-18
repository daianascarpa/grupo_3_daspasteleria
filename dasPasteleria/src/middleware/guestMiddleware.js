function guestMiddleware (req, res, next) {
    if (req.session.usuarioLoguearse) {
        return res.redirect ("/home");
    }
    next();
    }
    module.exports = guestMiddleware;