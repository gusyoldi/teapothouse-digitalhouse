const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const registerMulterMiddleware = require("../middlewares/registerMulterMiddleware");
const validations = require('../middlewares/registerValidationMiddleware')
const loginValidations = require('../middlewares/loginValidationMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get("/login", guestMiddleware, usersController.login);
router.get("/logout", usersController.logout);
router.post("/login",loginValidations, usersController.loginProcess);
router.get("/register", guestMiddleware, usersController.register);
router.get("/:id", authMiddleware, usersController.userDetail);
router.post("/register", registerMulterMiddleware.single("profile_pic"), validations, usersController.registerPOST);
router.get("/:id", usersController.login);
module.exports = router;
