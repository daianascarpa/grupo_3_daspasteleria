const express = require("express")
const router = express.Router()

const productViewController = require('../controllers/productViewController')

router.get('/detalle-del-producto', productViewController.productView)


module.exports = router