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
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == req.body.email) {
            if (usuarios[i].password==req.body.password) {   //if (bcryptjs.compareSync(req.body.password, usuarios[i].password)) se hace la compracion con contraseña encriptada y aun no se encripto
              usuarioLoguearse = usuarios[i];                                   
            break;
          }
        }
      }

      req.session.usuarioLoguearse = usuarioLoguearse;
      res.redirect("/home"); // en caso que el usuario ingrese con exito redirecciona al home
    } else {
      res.redirect("/Usuarios/login");
    }
  },

  // ver de agragar un metodo para enviar datos logeo

  register: function (req, res) {
    res.render("register", { titulo: "Registrate!" }); // muestra el formulario de registro
  },
  
  sessionRegister: function (req, res) {
   
   

      let registroUserNew = {
      id: usuarioRegister.length + 1,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password,10), // se encripta la contraseña cargada
      repeatPassword: req.body.repeatPassword,
      name: req.body.name,
      image: req.file.filename, // guarda la imagen en la BD, pero si no se carga nada tira error y toma la imagen default
   }; 
 
 if(typeof(req.file) == "undefined"){
  registroUserNew.avatar = 'perfil_dafault.JPG';
}
console.log(req.file)
 //guardo del body la info como esta = en el name del register.ejs
     usuarioRegister.push(registroUserNew);
    fs.writeFileSync(registerData, JSON.stringify(usuarioRegister));

    res.redirect("/Usuarios/login");
  },
};

module.exports = userController;


