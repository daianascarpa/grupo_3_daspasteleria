const express = require("express")
const router = express.Router()

const productCartController = require('../controllers/productCartController')

router.get('/carrito-de-compras', productCartController.productCart)


module.exports = router