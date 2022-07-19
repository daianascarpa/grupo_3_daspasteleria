const express  = require("express")
const router   = express.Router()
const { body,check } = require('express-validator')
const userController = require('../controllers/userController')

const validacionFormularioLogin = [
    body('email').notEmpty().isEmail().withMessage('campo obligatorio'), // campo obligatorio de completar, de tipo email y con mensaje al usuario en caso de error
    body('password').notEmpty().withMessage('campo obligatorio') // campo obligatorio de completar y con mensaje .
];

const validationRegisterForm = [
    check('email').notEmpty().isEmail().withMessage('campo obligatorio'), 
    check('password').notEmpty().withMessage('campo obligatorio'),
    check('passwordRepeat').notEmpty().withMessage('campo obligatorio'),
    check('name').notEmpty().withMessage('campo obligatorio'),
    check('aceptoTerminosCondiciones').withMessage('campo obligatorio') // crear un campo obligatorio para que si o si se tenga que clickear el checkbox
];

router.get('/login',userController.login) // mostrar formulario de login

router.post('/login',validacionFormularioLogin,userController.sessionLogin) //ruta de envio de formulario 

router.get('/register', userController.register) // mostrar formulario de registro
//router.post() la ruta del registro del usuario
router.post('/register',validationRegisterForm, userController.sessionRegister)
//router.post('/register',validationRegisterForm, userController.register)

module.exports = router