// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const productosController = require('../controllers/productosController');

router.get('/', mainController.index); /* GET - home page */
router.get('/producto/detalle/:id?', mainController.productoDetalle); /* GET - home page */
router.get('/registro', mainController.registro); /* GET - home page */
router.get('/carrito', mainController.carrito); /* GET - home page */

router.get('/producto/admin', productosController.productoAdmin); /* GET - Carga de productos */
router.get('/producto/admin/carga', productosController.productoCarga); /* GET - Carga de productos */


module.exports = router;
