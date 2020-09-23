const express = require('express');
const router = express.Router()
const cartController = require('../controllers/cartController');

const userMiddleware = require('../middlewares/userMiddleware');

router.get("/", cartController.get);
router.post("/add", cartController.add);
router.post("/update", cartController.update);
router.post("/clear", cartController.clear);
router.post("/delete", cartController.delete);
router.post("/venta", userMiddleware, cartController.venta);

module.exports = router;