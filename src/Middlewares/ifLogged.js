function ifLogged(req, res, next) {
    if (req.session.loggedUser) {
        return res.redirect("/users/cuenta");
    }
    next();
}

module.exports = ifLogged;
