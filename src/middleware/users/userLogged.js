const User = require('../../models/userModel');

async function userLoggedMiddleware(req, res, next) {
	//Iniciamos en false la variable
	res.locals.isLogged = false;

	let emailInCookie=''
	let userFromCookie
	//verificar si hay un email en cookie y lo obtener si hay
	if (req.cookies.email) {
		emailInCookie = req.cookies.email;
		userFromCookie = await  User.getUserByEmail( emailInCookie);
	}
	//verificar si hay un usuario que corresponda al email
	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}
	//verificar si fue almacenado
	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;
