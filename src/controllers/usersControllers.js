const bcryptjs = require("bcryptjs");

const accountsService = require("../services/accountsServices.js");
const accounts = accountsService.getAll();

const { validationResult } = require("express-validator");

const usersController = {
    registro: (req, res) => {
        res.render("users/register");
    },
    registroProcesado: (req, res) => {
        let errors = validationResult(req);

        console.log(errors);

        if (errors.isEmpty()) {
            let usuarioDb = accountsService.findByField(
                "email",
                req.body.email
            );
            if (usuarioDb) {
                errors.errors.push({
                    value: req.body.email,
                    msg: "Ya existe un usuario con ese email",
                    param: "email",
                    location: "body",
                });
                res.render("users/register", { errors: errors.errors });
                return
            }
            let newAccount = {
                id: Date.now(),
                name: req.body.name,
                email: req.body.email,
                birthday: req.body.birthday,
                dni: req.body.dni,
                password: bcryptjs.hashSync(req.body.password, 10),
                category: "user",
            };
            accounts.push(newAccount);
            accountsService.saveAccounts();
            res.redirect("/");
        } else {

          console.log('hola');
            res.render("users/register", {
                old: req.body,
                errors: errors.errors,
            });
        }
    },
    login: (req, res) => {
        res.render("users/login");
    },
    loginProcess: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let userLogin = accountsService.findByField(
                "email",
                req.body.email
            );
            if (userLogin) {
                let passwordOk = bcryptjs.compareSync(
                    req.body.password,
                    userLogin.password
                );
                if (passwordOk) {
                    delete userLogin.password;
                    req.session.loggedUser = userLogin;
                    if (req.body.recuerdame) {
                        res.cookie("userEmail", req.body.email, {
                            maxAge: 1000 * 60 * 60,
                        });
                    }
                    res.redirect("/users/cuenta");
                    return;
                } else {
                    errors.errors.push({
                        value: req.body.email,
                        msg: "La contraseña es incorrecta",
                        param: "password",
                        location: "body",
                    });
                    res.render("users/login", {
                        errors: errors.errors,
                    });
                    return;
                }
            }
        }
    },
    cuenta: (req, res) => {
        console.log(req.cookies.userEmail);
        res.render("users/cuenta", {
            user: req.session.loggedUser,
        });
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect("/");
    },
    cava: (req, res) => {
        res.render("users/cava");
    },
};

module.exports = usersController;
