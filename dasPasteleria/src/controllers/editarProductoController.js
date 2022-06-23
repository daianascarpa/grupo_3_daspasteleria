const editarProducto = {
    editar : function(req,res){
        res.render('editarProducto', {titulo: "Editar producto"})
    }
}

module.exports = editarProducto;