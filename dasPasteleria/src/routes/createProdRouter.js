const express = require("express")
const router = express.Router()

const createProdController = require('../controllers/createProdController')

router.get('/crear-producto', createProdController.create)


module.exports = router