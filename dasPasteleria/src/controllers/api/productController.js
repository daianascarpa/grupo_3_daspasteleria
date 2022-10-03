const db = require("../../database/models");

const Products = db.Product;
const productController = {
    product: (req, res) => {
       let groupCategory= Products.count({
            include: ['product_category'],
            group: ['product_category.category_name']
        })
       
       let products= Products.findAll({
        attributes: ['id', 'product_name','product_description'],
        include: [{model: db.ProductCategory, as: 'product_category',attributes: ['category_name']}],
        raw: true,
       })
        Promise
        .all([groupCategory,products])
        .then(([groupCategory,products]) => {
            console.log(groupCategory)
            let countByGroup = {}
            for( let i=0 ; i< groupCategory.length; i++){
                
                countByGroup[groupCategory[i].category_name] = groupCategory[i].count 
            }

        let newProducts = products.map(product=>{
            product.category =[product['product_category.category_name']]
            product.detail = 'http://localhost:3030/api/products/'+ product.id
            delete product['product_category.category_name']
           // console.log(product)
            
          return product
        })  

         // console.log(newProducts)

let respuesta ={
    count:products.length,
    countByGroup: countByGroup,
    Products:newProducts,
    }

        res.status(200).json({
        status: 200,
        respuesta,
    });
    });
},

detail: (req, res) => {
    Products.findByPk(req.params.id, {
        include: [{model: db.ProductCategory, as: 'product_category',attributes: ['category_name']}],
        raw: true
    })
    .then((product) => {
       // console.log(product)
       product.image = 'http://localhost:3030/img/products-img/'+product.image
       product.category = [product[ 'product_category.category_name']] 
       delete product['product_category.category_name']
        
        let respuesta ={
            product: product
            }
        
    res.status(200).json({
    status: 200,
    respuesta,
});
});
},


    store: (req, res) => {
        Products.create(req.body).then((product) => {
        res.status(200).json({
        status: 200,
        data: product,
    });
    });
},
   
update: (req, res) => {
    Products.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    .then(resolve=>{
        res.status(200).json({
            status: 200,
            edit: resolve
        })
    })
},
delete:  (req, res) => {
    Products.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(resolve=>{
        res.status(200).json({
            status: 200,
            edit: resolve
        })
    })

}



}


module.exports= productController