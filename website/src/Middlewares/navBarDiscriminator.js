function navBarDiscriminator(req, res, next) {
    res.locals.isLogged = false;

    if (req.session.loggedUser && req.session.loggedAdmin) {
        res.locals.isLogged = true;
    }

    next();
}

module.exports = navBarDiscriminator;
