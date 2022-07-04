const fs = require('fs');
const path = require('path');

const productsFilePath =  path.join(__dirname, '../data/dasProductList.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {

  product : function(req,res){
        res.render('product', {titulo: 'Catálogo Productos', products})
  },

  detail : function(req,res){
    let idProductView = req.params.id
    let productView = products.find( product => product.id == idProductView )
    res.render('productView', {titulo: "Detalle del Producto ", productView})
  },

  create : function(req,res){
    res.render('createProd', {titulo: "Formulario de Creación"})
    }, 

    store: function (req, res){
        let productNew = {
        id: (products.length +1),
        product_name: req.body.product_name,
        descripcion: req.body.descripcion,
        category: req.body.category,
        price_1: req.body.price,
        price_2: req.body.price, 
        size: req.body.porcion,
        quantity: req.body.porcion, 
        image:req.file.filename
      }
      products.push(productNew)
      fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8')
       res.redirect('/Productos') // logica para crear producto
    },

   edit : function(req,res){
      let idproductEdit = req.params.id
      let productToEdit = products.find( product => product.id == idproductEdit )
      res.render('editProduct', {titulo: "Edicion del Producto " +  productToEdit.product_name })
    },
    productCart: function(req,res){
      res.render('productCart', {titulo: "Carrito de compras"})
      
    }

}


module.exports = productController;


//productCart: function(req,res) {
//  res.render("productCart", {titulo: "Carrito de compras"})
//}
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