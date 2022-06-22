const modifyProdController = {
    modify : function(req,res){
        res.render('modificar', {titulo: "Modificar"})
    }
}

module.exports = modifyProdController