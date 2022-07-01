const fs = require('fs');
const path = require('path');


const userController = {
    login : function(req,res){
        res.render('login', {titulo: "Iniciá Sesión"})// muestra el formulario de login
    },

    // ver de agragar un metodo para enviar datos logeo

    register :  function(req,res){
        res.render('register', {titulo: "Registrate!"})// muestra el formulario de registro 

      // ver de agragar un metodo para enviar datos de registro  

    }
}


module.exports = userController