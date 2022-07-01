const express = require("express")
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/login', userController.login) // mostrar formulario de login
//router.post(´/ ) la ruta del logeo del usuario

router.get('/register', userController.register) // mostrar formulario de registro
//router.post(´/ ) la ruta del registro del usuario

module.exports = router