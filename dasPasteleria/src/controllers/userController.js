const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const Users = db.User;
const UsersCategory = db.UserCategory;

const userController = {
  register: function (req, res) {
    res.render("register", { titulo: "Registrate!" }); // muestra el formulario de registro
  },

  sessionRegister: function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      Users.findOne({
        where: { email: req.body.email },
      }).then((user) => {
        if (user) {
          res.render("register", {
            titulo: "Registrate!",
            errors: {
              email: {
                msg: "Las credenciales son inválidas",
              },
            },
          });
        } else {
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

          res.redirect("/Usuarios/login");
        }
      });
    } else {
      res.render("register", { titulo: "Registro", errors: errors.mapped() });
    }
  },

  login: function (req, res) {
    res.render("login", { titulo: "Iniciá Sesión" }); // muestra el formulario de login
  },

  sessionLogin: function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      Users.findOne({
        where: { email: req.body.email },
      }).then((userToLogin) => {
        if (userToLogin) {
          let ifOkPassword = bcryptjs.compareSync(
            req.body.user_password,
            userToLogin.user_password
          );
          if (ifOkPassword) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            res.redirect("/home"); // en caso que el usuario ingrese con exito redirecciona al home
          } 
        } else {
          res.render("login", {
            titulo: "Iniciá Sesión",
            errors: {
              email: {
                msg: "Las credenciales son inválidas",
              },
            },
          });
        }
      });
      // de las validaciones
    } else {
      res.render("login", { titulo: "Iniciá Sesión", errors: errors.mapped() }); // los errores de las validaciones
    }
  },

  logout: function (req, res) {
    req.session.destroy();
    return res.redirect("/home");
  },
  /*Falta agregar cookies, actualmente cuando uno de deslogeua y vuelve a loquearse, sin levantar el servivodr, salta error*/

  profile: function (req, res) {
    res.render("profile", {
      titulo: "Perfil de Usuario",
      userLogged: req.session.userLogged, 
    });
  },

  showEditedProfile: function (req, res) {
    res.render("EditProfile", {
      titulo: "Edicion Perfil de Usuario",
      userLogged: req.session.userLogged, //usuarioLoguearse: req.session.userLogged,
    });
  },

  UpdateProfile: function (req, res) {
    Users.findByPk(req.session.userLogged.id)
      .then((user) => {
        req.body.user_password  = req.body.user_password ? bcryptjs.hashSync(req.body.user_password, 10) : user.user_password
        req.body.repeat_password = req.body.repeat_password ? bcryptjs.hashSync(req.body.repeat_password, 10): user.repeat_password
        req.body.avatar = req.file ? req.file.filename : req.body.oldAvatar;
        let userEdit = {
           ...req.body,
        };
          console.log('req.body')
          console.log(req.body)
          Users.update(userEdit, {
            where: { id: user.id },
          })
           .then(() => {
            //req.session.userlogged=userEdit
            //req.session.save()
            console.log('userEdit')
            console.log(userEdit)
            res.redirect('/Usuarios/profile');
          });
      });
    ;//incluir un catch para el error
  },  


  usersList: function (req,res){
    Users.findAll({
      include: ["user_category"]}).then(users=>
      res.render('usersList.ejs', {titulo: 'Listado de Usuarios', users }))   
  },

};

module.exports = userController;
