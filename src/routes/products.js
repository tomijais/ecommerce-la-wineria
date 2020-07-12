// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');


// ************ Controller Require ************
const productosController = require('../controllers/productosController');


router.get('/producto/', productosController.productoAdmin); /* GET - Admin*/
router.get('/producto/carga', productosController.productoCrear); /* GET - Admin Carga de productos */
router.post('/producto/carga',productosController.productoGuardar);


module.exports = router;