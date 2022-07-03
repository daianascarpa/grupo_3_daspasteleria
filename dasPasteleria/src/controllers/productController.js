const fs = require('fs');
const path = require('path');

const productsFilePath =  path.join(__dirname, '../data/dasProductList.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {

  product : function(req,res){
        res.render('product', {titulo: 'Catálogo Productos', products})
  },
  create : function(req,res){
    res.render('createProd', {titulo: "Formulario de Creación"})
    }, 

    store: (req, res) => {
      let product = req.body;
      product.image = req.file.filename;
      product.id = (products.length + 1);
      products.push(product);
      fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8');
      res.redirect('/Productos')
    },
  
  detail : function(req,res){
    let idProductView = req.params.id
    let productView = products.find( product => product.id == idProductView )
    res.render('productView', {titulo: "Detalle del Producto ", productView})
  },




}
module.exports = productController;


 
    //edit : function(req,res){
    //        res.redirect('/product', {/*titulo:  Nombre del producto*/})
    //},

   // delete : function(req,res){
     //       res.redirect('/product', {/*titulo:  Nombre del producto*/})},


     /*store: function(req,res){
      let product = req.body;
      product.image = req.file.filename;
      product.id = (products.length + 1);
      products.push(product);
      fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8');
      res.redirect('/products')
      },*/