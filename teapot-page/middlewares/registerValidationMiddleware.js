const { body } = require("express-validator");
const path = require("path");
const { User } = require('../database/models')

const validations = [
    body("nombreApellido")
    .notEmpty()
    .withMessage("Debe ingresar su nombre")
    .bail()
    .isLength({min: 2})
    .withMessage("Debe contener al menos 2 caracteres"),
    body("usuario")
        .notEmpty()
        .withMessage("Debe ingresar un nombre de usuario"),
    body("email")
        .notEmpty()
        .withMessage("Debe ingresar un email")
        .bail()
        .isEmail()
        .withMessage("Debe ingresar un email valido")
        .bail()
        .custom(async (val) => {
            const user = await User.findOne({
                where: {
                    email: val
                }
            })

            if (user) {
                throw new Error('Este email ya fue registrado');
            }
        }),
    body("nacimiento")
        .notEmpty()
        .withMessage("Debe ingresar su fecha de nacimiento"),
    body("domicilio").notEmpty().withMessage("Debe ingresar su domicilio"),
    body("telefono")
        .notEmpty()
        .withMessage("Debe ingresar su numero de telefono"),
    body("password")
    .notEmpty()
    .withMessage("Debe ingresar una contraseña")
    .bail()
    .isLength({min: 8})
    .withMessage("Debe contener al menos 8 caracteres"),
    body("password2")
        .notEmpty()
        .withMessage("Debe ingresar la contraseña nuevamente")
        .bail()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("La contraseña no coincide");
            }
            return true;
        }),
    body("profile_pic").custom((value, { req }) => {
        let file = req.file;
        
        let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];

        if (!file) {
            throw new Error(`Tienes que subir una imagen`);
        } else {
            if (!acceptedExtensions.includes(path.extname(file.originalname).toLowerCase())) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
            }
        }

        return true;
    }),
];

module.exports = validations;
