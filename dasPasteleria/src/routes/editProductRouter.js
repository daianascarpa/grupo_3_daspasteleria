const express = require("express")
const router = express.Router()

const editProduct = require("../controllers/editProductController")


router.get('/editar-producto',editProduct.editar)

module.exports = router;