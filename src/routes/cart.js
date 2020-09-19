const express = require('express');
const router = express.Router()
const cartController = require('../controllers/cartController');

const userMiddleware = require('../middlewares/userMiddleware');

router.get("/", userMiddleware, cartController.get);
router.post("/add", userMiddleware, cartController.add);
router.post("/delete", userMiddleware, cartController.delete);
router.post("/venta", userMiddleware, cartController.venta);

module.exports = router;