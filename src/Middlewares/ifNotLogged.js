function ifNotLogged(req, res, next) {
    if (!req.session.loggedUser && !req.session.loggedAdmin) {
        return res.redirect("/users/login");
    }
    next();
}

module.exports = ifNotLogged;
