const fs = require('fs');
const path = require('path');

const productsFilePath =  path.join(__dirname, '../data/dasProductList.json');
const product = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const indexController = {
    index : function(req,res){
        res.render('index', {titulo:'DAS Pasteleria',})
    }
}

module.exports = indexController