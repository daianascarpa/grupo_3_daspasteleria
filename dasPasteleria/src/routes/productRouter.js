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
router.post('/crear-producto', upload.single('image'),  productController.store); 


 

/*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id',productController.edit)  // para mostrar formulario de Edicion//


router.get('/carrito-de-compras', productController.productCart) 

//mostrar el detalle de un solo producto

//router.put('/',productController.update) // para editar el producto
/*** DELETE ONE PRODUCT***/
router.delete('/:id', productController.delete) //elimar un producto

router.get('/:id', productController.detail) //mostrar el detalle de un solo producto

/*** Carrito de producto***/
//router.get('/carrito-de-compras', productController.productCart) //solo la vistas

module.exports = router