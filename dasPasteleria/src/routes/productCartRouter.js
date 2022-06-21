const express = require("express")
const router = express.Router()

const productCardController = require('../controllers/productCardController')

router.get('/carrito-de-compras', productCardController.productCard)


module.exports = router