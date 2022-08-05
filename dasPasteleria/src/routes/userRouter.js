const express  = require("express")
const router   = express.Router()
const { body,check } = require('express-validator')
const path = require('path')
const multer = require('multer')
const userController = require('../controllers/userController')
const guestMiddleware = require('../middleware/guestMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/users-img'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    } 
  })
  
  const upload = multer({storage})






const validacionFormularioLogin = [
    body('email').notEmpty().isEmail().withMessage('campo obligatorio'), // campo obligatorio de completar, de tipo email y con mensaje al usuario en caso de error
    body('password').notEmpty().withMessage('campo obligatorio') // campo obligatorio de completar y con mensaje .
];

const validationRegisterForm = [
    body('name').notEmpty().withMessage('campo obligatorio'),
    body('email').notEmpty().withMessage('campo obligatorio').bail().isEmail().withMessage('debe ser del tipo email'), 
    body('password').notEmpty().withMessage('campo obligatorio'),
    body('passwordRepeat').notEmpty().withMessage('campo obligatorio'),
    body('aceptoTerminosCondiciones').notEmpty().withMessage('campo obligatorio') // crear un campo obligatorio para que si o si se tenga que clickear el checkbox
];



router.get('/login', guestMiddleware, userController.login) // mostrar formulario de login

router.post('/login', validacionFormularioLogin, userController.sessionLogin) //ruta de envio de formulario 

router.get('/register', guestMiddleware, userController.register) // mostrar formulario de registro
//router.post() la ruta del registro del usuario
router.post('/register', upload.single('avatar'), validationRegisterForm, userController.sessionRegister)
//router.post('/register',validationRegisterForm, userController.register)
router.get('/logout', userController.logout) // para desloguearse

router.get('/profile', authMiddleware, userController.profile) // vita de perfil del usuario

module.exports = router