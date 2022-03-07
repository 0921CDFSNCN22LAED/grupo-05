function onlyUser(req, res, next) {
    res.locals.isUser = false;

    if (req.session.loggedUser) {
        if (
            req.session.loggedUser.tipo_id == 2 ||
            req.session.loggedUser.tipo_id == "2"
        ) {
            res.locals.isUser = true;
        } else {
            res.redirect("/users/cuenta");
        }
    } else {
        res.redirect("/users/login");
    }

    next();
}

module.exports = onlyUser;
