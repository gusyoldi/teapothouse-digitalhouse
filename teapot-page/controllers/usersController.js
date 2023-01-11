const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");

const usersController = {
    login: (req, res) => {
        return res.render("users/login", { style: "login.css" });
    },
    loginProcess: async (req, res) => {
        try {
            const errors = validationResult(req);
            let userToLogin = await db.User.findOne({
                where: {
                    email: req.body.email,
                },
            });

            if (userToLogin) {
                let passwordMatch = bcrypt.compareSync(
                    req.body.password,
                    userToLogin.user_password
                );

                if (passwordMatch) {
                    delete userToLogin.user_password;

                    req.session.userLogged = userToLogin;
                    req.session.cart = [];
                    if (req.body.stayConnected) {
                        res.cookie("userEmail", req.body.email, {
                            maxAge: 2000 * 60 * 2,
                        });
                    }
                    return res.redirect("/users/" + req.session.userLogged.id);
                }
                return res.render("users/login", {
                    style: "login.css",
                    errors: errors.mapped(),
                });
            }
            return res.render("users/login", {
                style: "login.css",
                errors: errors.mapped(),
            });
        } catch (err) {
            console.log(err);
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie("userEmail");
        return res.redirect("/");
    },
    register: (req, res) => {
        return res.render("users/register", { style: "register.css" });
    },
    registerPOST: async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                delete req.body.password;
                delete req.body.password2;

                return res.render("users/register", {
                    style: "register.css",
                    errors: errors.mapped(),
                    oldData: req.body,
                });
            }

            let {
                nombreApellido,
                usuario,
                email,
                nacimiento,
                domicilio,
                telefono,
                password,
            } = req.body;

            nombreApellido = nombreApellido.split(' ') // Asumiendo que la persona usa un nombre y un apellido
            let [firstName, lastName] = nombreApellido;
            
            let profile_pic = `/img/users/${req.file.filename}`;
            let encPassword = bcrypt.hashSync(password, 10);

            await db.User.create({
                username: usuario,
                first_name: firstName,
                last_name: lastName,
                address: domicilio,
                email: email,
                birthday: nacimiento,
                avatar: profile_pic,
                user_password: encPassword,
                phone: telefono,
            });

            res.redirect("/users/login");
        } catch (err) {
            console.log(err);
        }
    },
    userDetail: (req, res) => {
        return res.render("users/userDetail", {
            style: "userDetail.css",
            usuario: req.session.userLogged,
        });
    },
};

module.exports = usersController;
