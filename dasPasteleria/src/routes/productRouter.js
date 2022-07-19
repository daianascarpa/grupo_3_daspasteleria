const express = require("express")
const router = express.Router()
const path = require('path')
const multer = require('multer')
const productController = require('../controllers/productController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/products-img'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage })


/*** GET ALL PRODUCTS ***/ 
router.get('/', productController.product)

/*** CREATE ONE PRODUCT ***/ 
router.get('/crear-producto', productController.create)  
router.post('/crear-producto', upload.single('image'),  productController.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id',productController.edit)  // para mostrar formulario de Edicion//
// TO UPDATE PRODUCT //
router.put('/editar-producto/:id', productController.update) 

// GOT TO //
router.get('/carrito-de-compras', productController.productCart) 

/*** DELETE ONE PRODUCT***/
router.delete('/:id', productController.delete) 

// SHOW THE DETAIL OF ONE PRODUCT//
router.get('/:id', productController.detail) 

module.exports = router