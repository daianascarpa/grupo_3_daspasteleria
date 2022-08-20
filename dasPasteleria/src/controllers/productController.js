const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Products = db.Product;

const productController = {

  product: function(req,res){
        Products.findAll().then(products=>
          res.render('product', {titulo: 'Catálogo Productos', products, msg:'' }))
       
  },

  detail: function(req,res){
    Products.findByPk(req.params.id).then(productView=>
       res.render('productView', {titulo: "Detalle del Producto ", productView}))
    // let idProductView = req.params.id
    // let productView = products.find( product => product.id == idProductView )
   
  },

  create: function(req,res){
    res.render('createProd', {titulo: "Formulario de Creación"})
    }, 

  store: function (req, res){
        let productNew = {
        product_name: req.body.product_name,
        product_description: req.body.product_descripcion,
        category_id: req.body.category,
        image:req.file.filename,
        small_price: req.body.small_price,
        big_price: req.body.big_price
      }

      Products.create(productNew)//then, es necesario en este metodo?
        res.redirect('/Productos')
      
},
    

edit: function(req,res){
  Products.findByPk(req.params.id).then(productToEdit=>{
    res.render('editProduct', {titulo: "Edicion del Producto " +  productToEdit.product_name , productToEdit})
  })
},

    // Update - Method to update
    update:function(req,res){
     req.body.image = req.file ? req.file.filename : req.body.oldimage
     let productToEdit = {
        ...req.body,
        image: req.body.image
      }
     
      Products.update(productToEdit,{
        where:{id: req.params.id}
      }).then(productToEdit=>{// es necesario el then?
        res.redirect('/Productos')
      })
    },
    
  productCart: function(req,res){
      res.render('productCart', {titulo: "Carrito de compras"})
      
    },

    delete:function(req,res){
     Products.destroy({
      where:{
          id: req.params.id
      }
  })
  .then(resolve=>{
    res.redirect('/Productos')
      })
  },

  buscar: (req, res) => {
    let productSearch= req.body.search;
    console.log(req.body)
    Products.findAll({where: {product_name: {[db.Sequelize.Op.like] : '%' + productSearch + '%'}}})
    .then(products=>{
      console.log(products)
        if (products.length == 0) {
            return res.render('product', {titulo: 'Catálogo Productos', msg:"Los resultados no coinciden con la búsqueda realizada"})
        }else{
            return res.render('product', {titulo: 'Catálogo Productos', products, msg:''}) 
        }
    
    })
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