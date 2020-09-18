const express = require('express');
const router = express.Router()
const cartController = require('../controllers/cartController');

const userMiddleware = require('../middlewares/userMiddleware');

router.get("/", cartController.get);
router.post("/add", cartController.add);
router.post("/delete", cartController.delete);

module.exports = router;