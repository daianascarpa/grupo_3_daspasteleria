const db = require("../../database/models");

const Products = db.Product;

const productController = {
    product: (req, res) => {
        Products.findAll().then((products) => {
        res.status(200).json({
        status: 200,
        total: products.length,
        data: products,
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
    detail: (req, res) => {
        Products.findByPk(req.params.id).then((product) => {
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