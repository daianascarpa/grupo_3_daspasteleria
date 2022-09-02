const db = require ("../database/models");
const Users = db.User;

function authMiddleware (req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect ("/Usuarios/login");
    }

    const {id} = req.session.userLogged;
    Users.findByPk (id, {raw:true}).then ((user) =>{
        req.session.userLogged = {
            id: user.id, 
            email: user.email,
            user_name: user.user_name,
            category_id: user.category_id,
            avatar: user.avatar,
        };
        console.log ("desde el middleware =>", req.session.userLogged);
        next();
    })
  
    }
    module.exports = authMiddleware;