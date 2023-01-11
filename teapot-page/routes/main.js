const { Router } = require("express");
const router = Router();
const rutaUsers = require("./users")
const rutaProducts = require("./products");
const rutaCart = require("./cart");

router.get('/', (req, res) => res.render("index"))  
router.use('/users', rutaUsers);
router.use('/products', rutaProducts); 
router.use('/cart', rutaCart);
module.exports = router;
