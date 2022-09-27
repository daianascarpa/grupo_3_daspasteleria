const express  = require("express")
const router   = express.Router()
const productController = require('../../controllers/api/productController')

router.get('/list', productController.product)
// router.post('/crear-producto',  productController.store); 
// router.put('/editar-producto/:id', productController.update) 
// router.delete('/delete/:id', productController.delete)
router.get('/products/:id',  productController.detail); 

module.exports = router