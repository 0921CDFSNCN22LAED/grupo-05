function ifLogged(req, res, next) {
    if (req.session.loggedUser || req.session.loggedAdmin) {
        return res.redirect("/users/cuenta");
    }
    next();
}

module.exports = ifLogged;
