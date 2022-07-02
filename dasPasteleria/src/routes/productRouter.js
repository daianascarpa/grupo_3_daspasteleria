const express = require("express")
const router = express.Router()

const productController = require('../controllers/productController')

/*** GET ALL PRODUCTS ***/ 
router.get('/', productController.product)// muestra la vista de catalogo de producto

/*** GET ONE PRODUCT ***/ 
router.get('/:id', productController.detail) //mostrar el detalle de un solo producto




router.get('/carrito-de-compras', productController.productCart) //solo la vistas

/*
/*** CREATE ONE PRODUCT ***/ 
//router.get('/crear-producto', productController.create) // para mostrar formulario de creacion//
//router.post('/',  , productController.store); // para enviar la info del formulario de creacion//

/*** EDIT ONE PRODUCT ***/ 
//router.get('/editar-producto/:id',productController.edit)  // para mostrar formulario de Edicion//
//router.post('/',productController.edit) // para editar el producto



/*** DELETE ONE PRODUCT***/
//router.delete('/:id', productController.delete) //elimar un producto


/*** Carrito de producto***/


module.exports = router