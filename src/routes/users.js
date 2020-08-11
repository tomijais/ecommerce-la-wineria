// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Middlewares ************
const loginValidations = require('../validations/loginValidation.js')
const registerValidation = require('../validations/registerValidation.js')

const userMiddlewareLoginRegister = require('../middlewares/userMiddlewareLoginRegister');
const usersMiddleware = require('../middlewares/userMiddleware')


// ************ Multer code ************
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/images/uploads/avatars'))
  }, 
  filename: function (req, file, cb) {
    cb(null,`${file.fieldname}-${req.body.email}-${Date.now() + path.extname(file.originalname)}`)
  }
})

let upload = multer({ storage: storage })

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

router.get('/', usersController.index); //hacer vista del usuario

router.get('/login',userMiddlewareLoginRegister, usersController.login); 
router.post('/login',userMiddlewareLoginRegister,loginValidations, usersController.ingresar);



router.get('/register',userMiddlewareLoginRegister, usersController.register);
router.post('/register',userMiddlewareLoginRegister, upload.any(), usersController.saveUser);


router.get('/account/:id',usersMiddleware,usersController.accountEdit);
router.post('/account/:id',usersMiddleware,loginValidations, upload.any(), usersController.accountEditSave);


module.exports = router;
