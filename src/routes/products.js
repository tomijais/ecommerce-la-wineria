// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');


// ************ Controller Require ************
const productosController = require('../controllers/productosController');


router.get('/producto/', productosController.productoAdmin); /* GET - Admin*/
router.get('/producto/carga', productosController.productoCarga); /* GET - Admin Carga de productos */


module.exports = router;