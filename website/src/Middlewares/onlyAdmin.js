function onlyAdmin(req, res, next) {
    res.locals.isAdmin = false;

    if (req.session.loggedUser) {
        if (
            req.session.loggedUser.tipo_id == 1 ||
            req.session.loggedUser.tipo_id == "1"
        ) {
            res.locals.isAdmin = true;
        } else {
            res.redirect("/products/vinoteca");
        }
    } else {
        res.redirect("/products/vinoteca");
    }

    next();
}

module.exports = onlyAdmin;
