const fs = require('fs');
const path = require('path');

const productsFilePath =  path.join(__dirname, '../data/dasProductList.json');
const product = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const productController = {
    product : function(req,res){
        res.render('product',)
    },

    Detail : function(req,res){
        res.render('productView',{/*titulo:  Nombre del producto*/})
},

    create : function(req,res){
            res.render('createProd', {titulo: "Formulario de Creación"})
    },

    editar : function(req,res){
            res.redirect('/product', {/*titulo:  Nombre del producto*/})
    },

    delete : function(req,res){
            res.redirect('/product', {/*titulo:  Nombre del producto*/})

}
}






module.exports = productController