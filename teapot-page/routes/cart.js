const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const authMiddleware = require('../middlewares/authMiddleware');

router.get("/", authMiddleware, cartController.cart);
router.get("/list", authMiddleware, cartController.list);
router.post("/add", authMiddleware, cartController.add);
router.post("/change", authMiddleware, cartController.count);
router.delete("/remove", authMiddleware, cartController.remove);


module.exports = router;