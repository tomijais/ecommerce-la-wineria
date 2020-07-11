// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

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
router.get('/register', usersController.register);
router.post('/register', upload.any(), usersController.saveUser);

module.exports = router;
