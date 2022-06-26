const productController = {
    product : function(req,res){
        res.render('product',{titulo: "Productos"})
    }
}

module.exports = productController