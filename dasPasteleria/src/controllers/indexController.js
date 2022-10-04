// const fs = require('fs');
// const path = require('path');
const db = require("../database/models");
const sequelize = db.sequelize;

// const productsFilePath =  path.join(__dirname, '../data/dasProductList.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const Products = db.Product;


const indexController = {
    index : 
    // function(req,res){
    //   res.render('index', {titulo:'DAS Pasteleria', products})
    
    // }
      function(req,res){
      Products.findAll().then(products=>
        res.render('index', {titulo: 'DAS Pastelería', products}))
     
}
}

module.exports = indexController