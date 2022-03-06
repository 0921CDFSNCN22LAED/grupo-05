const bcryptjs = require("bcryptjs");

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

            let usuarioNuevo = await db.Usuarios.create({
                nombre: req.body.name,
                email: req.body.email,
                contrasenia: bcryptjs.hashSync(req.body.password, 10),
                tipo_id: 2,
                imagen: req.file.path.split("public").pop(),
            });

            delete usuarioNuevo.contrasenia;
            req.session.loggedUser = usuarioNuevo;

            res.redirect("/users/cuenta");
        } else {
            res.render("users/register", {
                old: req.body,
                errors: errors.errors,
            });
        }
    },
    login: (req, res) => {
        res.render("users/login");
    },
    loginProcess: async (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const usuarioLogin = await db.Usuarios.findOne({
                where: { email: req.body.email },
            });

            if (usuarioLogin) {
                let passwordOk = bcryptjs.compareSync(
                    req.body.password,
                    usuarioLogin.contrasenia
                );

                if (passwordOk) {
                    req.session.loggedUser = usuarioLogin;
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
                        old: req.body,
                        errors: errors.errors,
                    });
                    return;
                }
            } else {
                errors.errors.push({
                    value: req.body.email,
                    msg: "No existe un usuario con este mail",
                    param: "email",
                    location: "body",
                });
                res.render("users/login", {
                    old: req.body,
                    errors: errors.errors,
                });
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
    cuenta: async (req, res) => {
        try {
            let vinosFavorito = await db.Usuarios.findAll({
                include: { association: "favorito_id" },
                where: { id: req.session.loggedUser.id },
            });
            let arrayVinos = vinosFavorito[0].favorito_id;
            let vinos = [];

            for (let i = 0; i < arrayVinos.length; i++) {
                vinos.push(arrayVinos[i].dataValues);
            }

            res.render("users/cuenta", { user: req.session.loggedUser, vinos });
        } catch (error) {
            console.log(error);
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect("/");
    },
    cava: async (req, res) => {
        try {
            let vinosCava = await db.Usuarios.findAll({
                include: { association: "cava_id" },
                where: { id: req.session.loggedUser.id },
            });
            let arrayVinos = vinosCava[0].cava_id;
            let vinos = [];
            let precio = 0;

            for (let i = 0; i < arrayVinos.length; i++) {
                vinos.push(arrayVinos[i].dataValues);
            }

            for (let vino of vinos) {
                precio += vino.precio;
            }

            res.render("users/cava", { vinos, precio });
        } catch (error) {
            console.log(error);
        }
    },
    editarCuenta: async(req, res) => {
        let usuario = await db.Usuarios.findOne({where: {id: req.session.loggedUser.id}})

        res.render('users/editarCuenta', {usuario})
    },
    actualizarCuenta: async(req, res) => {
        let errors = validationResult(req);
        let usuario = await db.Usuarios.findByPk(req.params.id)
        if (errors.isEmpty()){

            let existingEmail = await db.Usuarios.findOne({
                where: { email: req.body.email },
            });

            if (existingEmail && existingEmail.email != req.session.loggedUser.email) {
                errors.errors.push({
                    value: req.body.email,
                    msg: "Ya existe un usuario con ese email",
                    param: "email",
                    location: "body",
                });
                res.render("users/editarCuenta" , {
                    old: req.body,
                    errors: errors.errors,
                    usuario
                });
                return;
            }
            await db.Usuarios.update({
                nombre: req.body.name,
                email: req.body.email,
                contrasenia: bcryptjs.hashSync(req.body.password, 10),
                tipo_id: 2,
                imagen: req.file.path.split("public").pop(),
            },{
                where: {id: req.params.id}
            })
    
            let usuarioActualizado = {
                id: req.params.id,
                nombre: req.body.name,
                email: req.body.email,
                tipo_id: 2,
                imagen: req.file.path.split("public").pop(),
            }
            req.session.loggedUser = usuarioActualizado
    
            res.redirect('/users/cuenta')
        } else {
            res.render('users/editarCuenta', {old: req.body, errors: errors.errors, usuario})
        }
    }
};

module.exports = usersController;
