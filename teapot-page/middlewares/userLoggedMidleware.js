
const db = require('../database/models')

const userLoggedMidleware = async (req, res, next) => {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie;

    if (emailInCookie) {
        userFromCookie = await db.User.findOne({
            where: {
                email: emailInCookie,
            },
        })
    }
    
    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
        delete userFromCookie.password
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }


    next();
}


module.exports = userLoggedMidleware;