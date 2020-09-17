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
const adminMiddleware = require('../middlewares/adminMiddleware');

//const adminMiddleware = require(path.join(__dirname, '../middlewares/adminMiddleware'))

router.get('/index', adminMiddleware, productosController.productoAdmin); /* GET - Admin*/

router.get('/api',  productosController.api); /* GET - API*/


router.get('/producto/carga', adminMiddleware, productosController.productoCrear); /* GET - Admin Carga de productos */
router.post('/producto/carga',adminMiddleware, upload.any(),productosController.productoGuardar);

router.get('/productos', adminMiddleware, productosController.productoAdminList) /*ADMIN - muestra listado de productos*/
router.get('/producto/edit/:id', adminMiddleware, productosController.editProduct) /*ADMIN - form para edicion de producto*/
router.put('/producto/edit/:id', adminMiddleware, upload.any(), productosController.saveEditProduct) /*ADMIN - edicion producto por POST*/
router.get('/producto/delete/:id', adminMiddleware, productosController.deleteProduct) /*ADMIN - form para edicion de producto*/
router.delete('/producto/delete/:id', adminMiddleware, productosController.saveDeleteProduct) /*ADMIN - edicion producto por POST*/

router.get('/producto/eliminados',adminMiddleware,productosController.verEliminados);
router.put('/producto/eliminados/:id',adminMiddleware,productosController.recuperarEliminados);


module.exports = router;
