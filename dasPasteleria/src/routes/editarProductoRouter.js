const express = require("express")
const router = express.Router()
const editarProducto = require("../controllers/editarProductoController")


router.get('/editar-producto', editarProducto.editar)

module.exports = router