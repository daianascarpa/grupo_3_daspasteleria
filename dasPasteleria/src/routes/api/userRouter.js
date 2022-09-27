const express  = require("express")
const router   = express.Router()
const userController = require('../../controllers/api/userController')

// router.post('/register', userController.register)
 router.get('/list', userController.list)
 router.get('/users/:id', userController.detail)
// router.put('/update/:id', userController.update)
// router.delete('/delete/:id', userController.delete)
module.exports = router

