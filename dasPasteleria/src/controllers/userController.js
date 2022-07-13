const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');

const registerData =  path.join(__dirname, '../data/dasProductList.json');
let usuarioRegister = JSON.parse(fs.readFileSync(registerData, 'utf-8'));

const userController = {
    login : function(req,res){
        res.render('login', {titulo: "Iniciá Sesión"})// muestra el formulario de login
    },
    sessionLogin: function(req,res){
       // const valdiar = validacionFormularioLogin(req); 


        
        res.redirect('/home'); // en caso que el usuario ingrese con exito redirecciona al home
    },

    // ver de agragar un metodo para enviar datos logeo

    register :  function(req,res){
        res.render('register', {titulo: "Registrate!"})// muestra el formulario de registro 
        
      // ver de agragar un metodo para enviar datos de registro  

      let registroUserNew = {
        id: (usuarioRegister.length +1),
        email: req.body.email,
        password: req.body.password,
        repeatPassword:req.body.repeatPassword,
        name:req.body.name
        
      } //guardo del body la info como esta = en el name del register.ejs
      
      usuarioRegister.push(registroUserNew)
      fs.writeFileSync(registerData, JSON.stringify(usuarioRegister), 'utf-8')

       res.redirect('/login') // a donde enviamos una vez que se registro ?

    },
    sessionRegister: function(req,res){
        res.render('register', {titulo: "Registrate!"})
    }
}


module.exports = userController