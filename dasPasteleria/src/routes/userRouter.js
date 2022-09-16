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
    body('email').notEmpty().withMessage('Campo Obligatorio').bail().isEmail().withMessage('Debe ser del tipo email'),  // campo obligatorio de completar, de tipo email y con mensaje al usuario en caso de error
    body('user_password').notEmpty().withMessage('Campo Obligatorio') // campo obligatorio de completar y con mensaje .
];

const validationRegisterForm = [
    body('user_name').notEmpty().withMessage('Campo Obligatorio').bail().isLength ({min: 2}).withMessage ("Debe tener minimo 2 caracteres"),
    body('email').notEmpty().withMessage('Campo Obligatorio').bail().isEmail().withMessage('Debe ser del tipo email'), 
    body('user_password').notEmpty().withMessage('Campo Obligatorio').bail().isLength({min:8}).withMessage ("Debe tener minimo 8 caracteres"),
    body('repeat_password').notEmpty().withMessage('Campo Obligatorio').bail().custom(async (confirmPassword, {req}) => {
      const password = req.body.user_password
      if(password !== confirmPassword){
         throw new Error('La contraseña debe ser igual')
      } 
    }),
    body('aceptoTerminosCondiciones').notEmpty().withMessage('Campo Obligatorio'), // crear un campo obligatorio para que si o si se tenga que clickear el checkbox
    body('avatar'). custom ((value, {req}) =>{
      let file = req.file;
      if (file){
        let extentionFile = path.extname(file.originalname);
        let acceptedExtentions = [".jpg", ".png", ".jpeg", ".gif"];
        if (!acceptedExtentions.includes(extentionFile)) {
          throw new Error (`La extension del archivo debe ser de tipo ${acceptedExtentions.join(", ")}`);
        }
      }        
        return true;
      })
];

const validationEditProfile = [
  body('user_name').isLength ({min: 2}).withMessage ("Debe tener minimo 2 caracteres"),
  body('email').isEmail().withMessage('Debe ser del tipo email'), 
  body('user_password').isLength({min:8}).withMessage ("Debe tener minimo 8 caracteres"),
  body('repeat_password').custom(async (confirmPassword, {req}) => {
    const password = req.body.user_password
      if(password !== confirmPassword){
       throw new Error('La contraseña debe ser igual')
    }
  }),
  body('aceptoTerminosCondiciones').notEmpty().withMessage('Campo Obligatorio'), // crear un campo obligatorio para que si o si se tenga que clickear el checkbox
  body("avatar").custom ((value, {req}) =>{
  let file = req.file;
    if (file){
      let extentionFile = path.extname(file.originalname);
      let acceptedExtentions = [".jpg", ".png", ".jpeg", ".gif"];
      if (!acceptedExtentions.includes(extentionFile)) {
        throw new Error (`La extension del archivo debe ser de tipo ${acceptedExtentions.join(",")}`);
      }
    }        
      return true;
  }),
]


router.get('/login', guestMiddleware, userController.login) // mostrar formulario de login

router.post('/login', validacionFormularioLogin, userController.sessionLogin) //ruta de envio de formulario 

router.get('/register', guestMiddleware, userController.register) // mostrar formulario de registro

router.post('/register', upload.single('avatar'), validationRegisterForm, userController.sessionRegister)

router.get('/logout', userController.logout) // para desloguearse

router.get('/profile', authMiddleware, userController.profile) // vista de perfil del usuario

router.get('/profile/editar', authMiddleware, userController.showEditedProfile)

router.put('/profile/editar/', upload.single('avatar'),authMiddleware, validationEditProfile, userController.UpdateProfile) // falta validacion en avatar

router.get('/List', userController.usersList)




module.exports = router