/*Cookies*/

const db = require("../database/models");

//const user = require('../services/usersServices');

function recordameMiddleware (req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;

	if (emailInCookie){

		db.Usuarios.findOne({
			where: {email: emailInCookie}
		}).then((userFromCookie) => {
			if (userFromCookie) {
				req.session.loggedUser = userFromCookie;
			}
		
			if (req.session.loggedUser) {
				res.locals.isLogged = true;
				res.locals.loggedUser = req.session.loggedUser;
			}
			
		})
	}

	
	next();
	
}
module.exports = recordameMiddleware;
