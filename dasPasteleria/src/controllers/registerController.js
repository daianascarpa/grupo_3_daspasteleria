const registerController = {
    register : function(req,res){
        res.render('register', {titulo: "Registrate!"})
    }
}

module.exports = registerController