const { body } = require("express-validator");
const path = require('path')

module.exports = [
    body("name").notEmpty().withMessage("Agregue un nombre").bail().isLength({min: 5}).withMessage("Debe tener al menos 5 caracteres"),
    body("precio").notEmpty().withMessage("Agregue un precio"),
    body("entrega").notEmpty().withMessage("Agregue un metodo de entrega"),
    body("consejos").notEmpty().withMessage("Agregue un consejo"),
    body("description").notEmpty().withMessage("Agregar descripción").bail().isLength({min: 20}).withMessage("Debe tener al menos 20 caracteres"),
    body("category").notEmpty().withMessage("Debe seleccionar una categoria"),
    body("img1").custom((value, { req }) => {
        let files = req.files;

        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

        if (files.length != 3) {
            throw new Error(`Tienes que subir tres imagenes`);
        } else {
            files.forEach(e => {
                if (!acceptedExtensions.includes(path.extname(e.originalname).toLowerCase())) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }
            })
		}

        return true;
    }),
];
