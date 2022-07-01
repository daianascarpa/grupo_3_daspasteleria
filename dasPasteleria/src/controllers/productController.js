const fs = require('fs');
const path = require('path');

const productsFilePath =  path.join(__dirname, '../data/dasProductList.json');
const product = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {

   product : function(req,res){
        res.render('product', {titulo: 'Catálogo Productos'})
    },

    detail : function(req,res){
        res.render('productView',{titulo: 'Nombre del producto'})
},
   productCart: function(req,res){
        res.render('productCart', {titulo:'Carrito-de-compras'})
          },
        }
    //create : function(req,res){
      //      res.render('createProd', {titulo: "Formulario de Creación"}) //muestra el formulario de creacion
    //},

    //store: function(req,res){
    //    res.render('createProd', {titulo: "Formulario de Creación"})// logica para crear producto
    //}, 

    //edit : function(req,res){
    //        res.redirect('/product', {/*titulo:  Nombre del producto*/})
    //},

   // delete : function(req,res){
     //       res.redirect('/product', {/*titulo:  Nombre del producto*/})},



module.exports = productController;