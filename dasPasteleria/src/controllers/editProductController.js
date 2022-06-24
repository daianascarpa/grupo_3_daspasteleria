const editProduct = {
    editar : function(req,res){
        res.render('editProduct', {titulo: "Editar Producto"})
    }
}

module.exports = editProduct;