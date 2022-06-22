const express = require("express")
const router = express.Router()

const modifyProdController = require('../controllers/modifyProdController')

router.get('/modificar', modifyProdController.modify)


module.exports = router