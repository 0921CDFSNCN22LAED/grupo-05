function navBarDiscriminator(req, res, next) {
    res.locals.isLogged = false;

    if (req.session.loggedUser) {
        res.locals.isLogged = true;
    }

    console.log('hola');

    next();
}

module.exports = navBarDiscriminator;
