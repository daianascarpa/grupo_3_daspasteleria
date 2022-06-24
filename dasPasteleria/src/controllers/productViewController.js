const productViewController = {
    productView : function(req,res){
        res.render('productView', {titulo:'Detalle de producto'})
    }
}

module.exports = productViewController