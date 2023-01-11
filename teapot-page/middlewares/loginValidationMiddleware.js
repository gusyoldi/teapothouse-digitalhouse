const { body } = require("express-validator");
const bcrypt = require("bcryptjs");
const { User } = require('../database/models')

const loginValidations = [
    body("email")
    .notEmpty()
    .withMessage("Debe ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debe ingresar un email valido")
    .bail()
    .custom(async (value) => {
        let userToLogin = await User.findOne({
            where: {
                email: value
            },
            attributes: ['email']
        });
        if (!userToLogin) {
            throw new Error("Este email no se encuentra registrado");
        }

    }),
    body("password")
    .notEmpty()
    .withMessage("Debe ingresar una contraseña")
    .bail()
    .custom(async (value, { req }) => {
        let userToLogin = await User.findOne({
            where: {
                email: req.body.email
            },
            attributes: ['user_password']     
        });
        
        if (userToLogin){
            let passwordMatch = bcrypt.compareSync(value, userToLogin.user_password)
            if (!passwordMatch) {
                throw new Error("La contraseña es incorrecta");
            }
            return true;
        }
    }),
    
];

module.exports = loginValidations;
