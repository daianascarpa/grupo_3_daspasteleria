const productDetailController = {
    productDetail : function(req,res){
        res.render('productDetail',{titulo: "Detalle de producto"})
    }
}

module.exports = productDetailController