const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const creationMulterMiddleware = require("../middlewares/creationMulterMiddleware");
const validations = require("../middlewares/creationValidationMiddleware");

router.get("/", productsController.products);
router.get("/category/:category", productsController.categories);
router.get("/create", productsController.create);
router.post(
    "/create",
    creationMulterMiddleware.any(),
    validations,
    productsController.createPOST
);
router.get("/:id", productsController.productDetail);
router.get("/:id/edit", productsController.edit);
router.put("/:id", creationMulterMiddleware.any(), productsController.editPUT);
router.delete("/:id", productsController.delete);
module.exports = router;
