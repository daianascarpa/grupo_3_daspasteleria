const productCartController = {
    productCart : function(req,res){
        res.render('productCart', {titulo: "Carrito de Compras"})
    }
}

module.exports = productCartController