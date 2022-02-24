/*Cookies*/
//const user = require('../services/usersServices');
const accountsService = require("../services/accountsServices");

function recordameMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = accountsService.findByField("email", emailInCookie);

	if (userFromCookie) {
		req.session.loggedUser = userFromCookie;
	}

	if (req.session.loggedUser) {
		res.locals.isLogged = true;
		res.locals.loggedUser = req.session.loggedUser;
	}

    next();
}
module.exports = recordameMiddleware;
