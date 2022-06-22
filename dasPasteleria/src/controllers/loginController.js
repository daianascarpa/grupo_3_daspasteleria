const loginController = {
    login : function(req,res){
        res.render('login', {titulo: "Iniciá Sesión"})
    }
}

module.exports = loginController