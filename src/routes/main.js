// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');

// ************ Controller Require ************
const mainController = require('../controllers/mainController');


router.get('/', mainController.index); /* GET - home page */
router.get('/producto/detalle/:id', mainController.productoDetalle); /* GET - home page */
router.get('/carrito', mainController.carrito); /* GET - home page */


module.exports = router;
