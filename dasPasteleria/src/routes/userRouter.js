const express  = require("express")
const router   = express.Router()
const { body,check } = require('express-validator')
const path = require('path')
const multer = require('multer')
const userController = require('../controllers/userController')
const guestMiddleware = require('../middleware/guestMiddleware')

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
    body('password').notEmpty().isLength({ min:8} ).withMessage('campo obligatorio') // campo obligatorio de completar y con mensaje .
];

const validationRegisterForm = [
    check('email').notEmpty().isEmail().withMessage('campo obligatorio'), 
    check('password').notEmpty().isLength({ min:8} ).withMessage('campo obligatorio'),
    check('passwordRepeat').notEmpty().isLength({ min:8} ).withMessage('campo obligatorio'),
    check('name').notEmpty().withMessage('campo obligatorio')
];



router.get('/login',guestMiddleware, userController.login) // mostrar formulario de login

router.post('/login',validacionFormularioLogin,userController.sessionLogin) //ruta de envio de formulario 

router.get('/register', guestMiddleware, userController.register) // mostrar formulario de registro
//router.post() la ruta del registro del usuario
router.post('/register',validationRegisterForm, upload.single('avatar'), userController.sessionRegister)
//router.post('/register',validationRegisterForm, userController.register)

module.exports = router