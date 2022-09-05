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

  const validationProductCreation = [
    body('product_name').notEmpty().withMessage('Campo Obligatorio').bail().isLength ({min: 5}).withMessage ("Debe tener al menos 5 caracteres"), // ver porque no tira el de 5 caracteres
    body('product_description').notEmpty().withMessage('Campo Obligatorio').bail().isLength ({min: 20}).withMessage ("Debe tener al menos 20 caracteres"), // ver porque no tira el de 20 caracteres
    body('image'). custom ((value, {req}) =>{
      let file = req.file;
      let acceptedExtentions = [".jpg", ".png", ".jpeg", ".gif"];
      if (!file) {
        throw new Error ("Campo de Archivo Obligatorio");
      } else {
        let extentionFile = path.extname(file.originalname);
        if (!acceptedExtentions.includes(extentionFile)) {
          throw new Error (`La extension del archivo debe ser de tipo${acceptedExtentions.join(",")}`);
  
        }
      } return true;
    }),
    body('small_price').notEmpty().withMessage('Campo Obligatorio').bail().isNumeric().withMessage('Sólo se admiten valores numéricos'),
    body('big_price').notEmpty().withMessage('Campo Obligatorio').bail().isNumeric().withMessage('Sólo se admiten valores numéricos'),
];

const validationProductEdit = [
  body('product_name').notEmpty().withMessage('Campo Obligatorio').bail().isLength ({min: 5}).withMessage ("Debe tener al menos 5 caracteres"), // ver porque no tira el de 5 caracteres
  body('product_description').notEmpty().withMessage('Campo Obligatorio').bail().isLength ({min: 20}).withMessage ("Debe tener al menos 20 caracteres"), // ver porque no tira el de 20 caracteres
  body('image').custom ((value, {req}) =>{
    let file = req.file;
    if (file){
      let extentionFile = path.extname(file.originalname);
      let acceptedExtentions = [".jpg", ".png", ".jpeg", ".gif"];
      if (!acceptedExtentions.includes(extentionFile)) {
        throw new Error (`La extension del archivo debe ser de tipo ${acceptedExtentions.join(",")}`);
      }
    }        
      return true;
  }),
  body('small_price').notEmpty().withMessage('Campo Obligatorio').bail().isNumeric().withMessage('Sólo se admiten valores numéricos'),
  body('big_price').notEmpty().withMessage('Campo Obligatorio').bail().isNumeric().withMessage('Sólo se admiten valores numéricos'),
];

/*** GET ALL PRODUCTS ***/ 
router.get('/', productController.product)


/*** CREATE ONE PRODUCT ***/ 
router.get('/crear-producto', productController.create)  
router.post('/crear-producto', upload.single('image'), validationProductCreation, productController.store); 

// /*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id',productController.edit)  // para mostrar formulario de Edicion//

// // TO UPDATE PRODUCT //
router.put('/editar-producto/:id', upload.single('image'), validationProductEdit, productController.update) // falta validacion de foto 

// // GOT TO //
router.get('/carrito-de-compras', authMiddleware, productController.productCart) 

// /*** DELETE ONE PRODUCT***/
router.delete('/:id', productController.delete) 


router.get('/buscar',productController.search)

// SHOW THE DETAIL OF ONE PRODUCT//
router.get('/:id', productController.detail) 

module.exports = router