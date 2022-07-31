const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { body, check, validationResult } = require("express-validator");

const registerData = path.join(__dirname, "../data/dasUsersList.json");
let usuarioRegister = JSON.parse(fs.readFileSync(registerData, "utf-8"));

const userController = {
  login: function (req, res) {
    res.render("login", { titulo: "Iniciá Sesión" }); // muestra el formulario de login
  },
  sessionLogin: function (req, res) {
    let error = validationResult(req);
    if (error.isEmpty()) {
      let usuarios
      if (!usuarioRegister) {
         usuarios = [];
      } else {
        usuarios = usuarioRegister;
      }
    
      let usuarioLoguearse = usuarioRegister.find(usuario => usuario.email == req.body.email)
      if (usuarioLoguearse) {
        let ifOkPassword = bcryptjs.compareSync(req.body.password, usuarioLoguearse.password);
        if (ifOkPassword) {
          delete usuarioLoguearse.password;
          req.session.usuarioLoguearse = usuarioLoguearse;
          return res.redirect("/home"); // en caso que el usuario ingrese con exito redirecciona al home
        }
      }     
    }
      return res.render("login", {
        titulo: "Iniciá Sesión" ,
        errors: {
          email: {
            msg: "Las credenciales son inválidas"
          },
        }
      });
    },
  
  logout: function(req, res) {
    req.session.destroy();
    return res.redirect("/home");
  },
  

  register: function (req, res) {
    res.render("register", { titulo: "Registrate!" }); // muestra el formulario de registro
  },

  sessionRegister: function (req, res) {
    let findUser = usuarioRegister.find(usuario => usuario.email == req.body.email)
    
    if(findUser){
     return res.send('este email ya esta registrado')
    }
    let registroUserNew = {
                id: usuarioRegister.length + 1,
                email: req.body.email,
                password:bcryptjs.hashSync(req.body.password,10),
                repeatPassword: bcryptjs.hashSync(req.body.password,10),
                name:req.body.name,
              }; 
              
              if(typeof(req.file) == "undefined"){
              registroUserNew.avatar = 'perfil_default.JPG';
             }else{
              registroUserNew.avatar = req.file.filename
             }
         //guardo del body la info como esta = en el name del register.ejs
             usuarioRegister.push(registroUserNew);
             fs.writeFileSync(registerData, JSON.stringify(usuarioRegister), "utf-8");
          
          
          res.redirect("/Usuarios/login");
        },

  profile:function (req, res){
    res.render('profile', {titulo: "Perfil de Usuario", usuarioLoguearse: req.session.usuarioLoguearse })
  }       

    }
        
    

module.exports = userController;


