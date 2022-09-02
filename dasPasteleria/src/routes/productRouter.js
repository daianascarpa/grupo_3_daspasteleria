const express = require("express")
const router = express.Router()
const { body,check } = require('express-validator')
const path = require('path')
const multer = require('multer')
const productController = require('../controllers/productController')
const authMiddleware = require("../middleware/authMiddleware")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/products-img'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage })

  const validacionFormularioCreacionProducto = [
    body('product_name').notEmpty().withMessage('Campo Obligatorio').bail().isLength ({min: 5}).withMessage ("Debe tener al menos 5 caracteres"), // ver porque no tira el de 5 caracteres
    body('product_description').notEmpty().withMessage('Campo Obligatorio').bail().isLength ({min: 20}).withMessage ("Debe tener al menos 20 caracteres"), // ver porque no tira el de 20 caracteres
];



/*** GET ALL PRODUCTS ***/ 
router.get('/', productController.product)


/*** CREATE ONE PRODUCT ***/ 
router.get('/crear-producto', productController.create)  
router.post('/crear-producto', validacionFormularioCreacionProducto, upload.single('image'), productController.store); 

// /*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id',productController.edit)  // para mostrar formulario de Edicion//

// // TO UPDATE PRODUCT //
router.put('/editar-producto/:id',validacionFormularioCreacionProducto, upload.single('image'), productController.update) 

// // GOT TO //
router.get('/carrito-de-compras', authMiddleware, productController.productCart) 

// /*** DELETE ONE PRODUCT***/
router.delete('/:id', productController.delete) 


router.get('/buscar',productController.search)

// SHOW THE DETAIL OF ONE PRODUCT//
router.get('/:id', productController.detail) 

module.exports = router