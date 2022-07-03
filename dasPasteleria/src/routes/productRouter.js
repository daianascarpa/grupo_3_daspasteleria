const express = require("express")
const router = express.Router()
const path = require('path')
const multer = require('multer')
const productController = require('../controllers/productController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img'))
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
router.post('/crear-producto', upload.single('foto producto'),  productController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/:id', productController.detail) //mostrar el detalle de un solo producto



module.exports = router

/*** EDIT ONE PRODUCT ***/ 
//router.get('/editar-producto/:id',productController.edit)  // para mostrar formulario de Edicion//
//router.post('/',productController.edit) // para editar el producto
/*** DELETE ONE PRODUCT***/
//router.delete('/:id', productController.delete) //elimar un producto

/*** Carrito de producto***/
//router.get('/carrito-de-compras', productController.productCart) //solo la vistas