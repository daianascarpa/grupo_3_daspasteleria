// const fs = require("fs");
// const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

// const registerData = path.join(__dirname, "../data/dasUsersList.json");
// let usuarioRegister = JSON.parse(fs.readFileSync(registerData, "utf-8"));

const db = require("../database/models");

const Users = db.User

const userController = {
  register: function (req, res) {
    res.render("register", { titulo: "Registrate!" }); // muestra el formulario de registro
  },

  sessionRegister: function (req, res) {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
      Users.findOne({
        where:{email : req.body.email}
      }).then(user=>{
       
          if(user){
          res.render("register", {
            titulo: "Registrate!" ,
            errors: {
              user_name:{
                msg: "Las credenciales son inválidas",
              },
              email: {
                msg: "Las credenciales son inválidas",
              },
            },
          })
        }else{
          let registroUserNew = {
            email: req.body.email,
            user_password: bcryptjs.hashSync(req.body.user_password, 10),
            repeat_password: bcryptjs.hashSync(req.body.repeat_password, 10),
            user_name: req.body.user_name,
          };
          if (typeof req.file == "undefined") {
            registroUserNew.avatar = "perfil_default.JPG";
          } else {
            registroUserNew.avatar = req.file.filename;
          }
          //guardo del body la info como esta = en el name del register.ejs
         Users.create(registroUserNew); // ver si es necesario el then
        
        res.redirect("/Usuarios/login")
        }
      })
  
  }else{
  
  res.render("register", {titulo: "Registro", errors: errors.mapped()})
  }
}, 

  login: function (req, res) {
    res.render("login", { titulo: "Iniciá Sesión" }); // muestra el formulario de login
  },
  sessionLogin: function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      // let usuarios;
      // let usuarioRegister = JSON.parse(fs.readFileSync(registerData, "utf-8"));

      // if (!usuarioRegister) {
      //   usuarios = [];
      // } else {
      //   usuarios = usuarioRegister;
      // }
      let userToLogin = Users.findByField('email', req.body.email)
      if (userToLogin) {
        let ifOkPassword = bcryptjs.compareSync(req.body.password,userToLogin.password);
        if (ifOkPassword) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
          return res.redirect("/home"); // en caso que el usuario ingrese con exito redirecciona al home
        }else{
          return res.render("login", {
          titulo: "Iniciá Sesión",
          errors: {
            email: {
              msg: "Las credenciales son inválidas",
            },
          },
        })

        }
      }
    } else {

      res.render("login", {titulo: "Iniciá Sesión", errors: errors.mapped()}) // los errores de las validaciones

    }
    ;
  },

  logout: function (req, res) {
    req.session.destroy();
    return res.redirect("/home");
  },
  /*Falta agregar cookies, actualmente cuando uno de deslogeua y vuelve a loquearse, sin levantar el servivodr, salta error*/

 

  profile: function (req, res) {
    res.render("profile", {
      titulo: "Perfil de Usuario",
      usuarioLoguearse: req.session.usuarioLoguearse,
    });
  },
};

module.exports = userController;
