const db = require ("../database/models");
const Users = db.User;

function authMiddleware (req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect ("/Usuarios/login");
    }

    const {id} = req.session.userLogged;
    Users.findByPk (id, {raw:true}).then ((user) =>{
        console.log ("desde el middleware =>", user);
        req.session.userLogged = user;
        next();
    })
  
    }
    module.exports = authMiddleware;