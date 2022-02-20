const bcryptjs = require("bcryptjs");

const accountsService = require("../services/accountsServices.js");
const accounts = accountsService.getAll();

const db = require("../database/models");

const { validationResult } = require("express-validator");

const usersController = {
    registro: (req, res) => {
        res.render("users/register");
    },
    registroProcesado: async (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let existingEmail = await db.Usuarios.findOne({
                where: { email: req.body.email },
            });
            if (existingEmail) {
                errors.errors.push({
                    value: req.body.email,
                    msg: "Ya existe un usuario con ese email",
                    param: "email",
                    location: "body",
                });
                res.render("users/register", {
                    old: req.body,
                    errors: errors.errors,
                });
                return;
            }

            console.log(req.body)

            db.Usuarios.create({
                nombre: req.body.name,
                email: req.body.email,
                contrasenia: bcryptjs.hashSync(req.body.password, 10),
                tipo_id: 2
            });

            let usuarioNuevo = {
                nombre: req.body.name,
                email: req.body.email,
                contrasenia: bcryptjs.hashSync(req.body.password, 10),
                tipo_id: 1
            }
            console.log(usuarioNuevo);
            req.session.loggedUser = usuarioNuevo;


            res.redirect("/");
        } else {
            res.render("user/register", {
                old: req.body,
                errors: errors.errors,
            });
        }
    },

    //  ERROR EN LAS VALIDACIONES  ----> SOLUCIONAR!

    /*let errors = validationResult(req);

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
            res.render("users/register", {
                old: req.body,
                errors: errors.errors,
            });
            return;
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
        res.render("users/register", {
            old: req.body,
            errors: errors.errors,
        });
    }*/

    login: (req, res) => {
        res.render("users/login");
    },
    loginProcess: async (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            const usuarioLogin = await db.Usuarios.findOne({
                where: {email: req.body.email}
            })

            if (usuarioLogin) {
                let passwordOk = bcryptjs.compareSync(req.body.password, usuarioLogin.contrasenia)

                if (passwordOk) {
                    req.session.loggedUser = usuarioLogin
                    res.redirect("/users/cuenta")
                    return

                } else {
                    errors.errors.push({
                        value: req.body.email,
                        msg: 'La contraseña es incorrecta',
                        param: 'password',
                        location: 'body'
                    })
                    res.render("users/login", { old: req.body, errors: errors.errors })
                    return
                }
            } else {
                errors.errors.push({
                    value: req.body.email,
                    msg: 'No existe un usuario con este mail',
                    param: 'email',
                    location: 'body'
                })
                res.render("users/login", { old: req.body, errors: errors.errors })
            }
        } else {
            res.render("users/login", { old: req.body, errors: errors.errors });
        }
        /*let userLogin = accountsService.findByField(
            "email",
            req.body.email
        );*/
    },
    /*     cuenta: (req, res) => {
        res.render("users/cuenta", {
            user: req.session.loggedUser,
        });
    }, */
    cuenta: (req, res) => {
        res.render("users/cuenta", { user: req.session.loggedUser });
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
