const createProdController = {
    create : function(req,res){
        res.render('createProd', {titulo: "Crear Producto"})
    }
}

module.exports = createProdController