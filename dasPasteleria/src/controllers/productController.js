const fs = require('fs');
const path = require('path');

const productsFilePath =  path.join(__dirname, '../data/dasProductList.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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
        size: size,
        image:req.file.filename,
      }
      // A ver a posterior con base de datos //
      productNew.size = size
      let size = false
      let category = req.body.category
      if (category == "Tarta" || category == "Torta") {
        size = true;
      }

      products.push(productNew)
      fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8')
       res.redirect('/Productos') // logica para crear producto
    },

  edit : function(req,res){
      let idproductEdit = req.params.id
      globalThis.productToEdit;
      let productToEdit = products.find( product => product.id == idproductEdit )
      res.render('editProduct', {titulo: "Edicion del Producto " +  productToEdit.product_name , productToEdit})

    },

    // Update - Method to update
  update: (req, res) => {
      /*let idproductEdit = req.params.id
      let productToEdit = products.find( product => product.id == idproductEdit )
        productToEdit = {
        product_name: req.body.product_name,
        descripcion: req.body.descripcion,
        category: req.body.category,
        price_1: req.body.price,
        price_2: req.body.price, 
        size: size,
      },*/

      let id = req.params.id;
      console.log(id)
      for (let i=0; i<products.length; i++) {
       if (products[i].id == id) {
          products[i].product_name = req.body.product_name;
          products[i].description = req.body.description;
          products[i].category = req.body.category;
          products[i].price_1 = req.body.price;
          products[i].price_2 = req.body.price;
          products[i].size = req.body.porcion;
          products[i].quantity = req.body.quantity;      
                    
        }
      }
      fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8')
      res.redirect(`/Productos`)
    },


  productCart: function(req,res){
      res.render('productCart', {titulo: "Carrito de compras"})
      
    },

  delete : (req, res) => {
      let id = req.params.id;
      console.log(id);
      products = products.filter(function(product){
        return product.id != id;
      })
      fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8')
      res.redirect('/Productos')
    },
  
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