const express = require("express")
const router = express.Router()

const productController = require('../controllers/productController')

router.get('/Productos', productController.product)


module.exports = router