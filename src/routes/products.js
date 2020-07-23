// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');



var storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null, 'public/images/products/')
        },
        filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    });
    
    var upload = multer({storage:storage});
    

// ************ Controller Require ************
const productosController = require('../controllers/productosController');


router.get('/producto/', productosController.productoAdmin); /* GET - Admin*/
router.get('/producto/carga', productosController.productoCrear); /* GET - Admin Carga de productos */
router.post('/producto/carga',upload.any(),productosController.productoGuardar);

router.get('/index', productosController.productoIndex) /*ADMIN - muestra listado de productos*/
router.get('/producto/:id/edit', productosController.editProduct) /*ADMIN - form para edicion de producto*/
/*router.put('/producto/:id/edit', productsController.saveEditProduct); ADMIN - edicion producto por POST*/

module.exports = router;