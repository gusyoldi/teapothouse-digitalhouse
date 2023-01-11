const guestMiddleware = (req, res, netx) => {
    if (req.session.userLogged) {
        return res.redirect('/users/' + req.session.userLogged.id)
    }
    netx();
}

module.exports = guestMiddleware;