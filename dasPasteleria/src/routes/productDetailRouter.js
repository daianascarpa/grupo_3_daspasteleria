const express = require("express")
const router = express.Router()

const productDetailController = require('../controllers/productDetailController')

router.get('/detalle-de-producto', productDetailController.productDetail)


module.exports = router