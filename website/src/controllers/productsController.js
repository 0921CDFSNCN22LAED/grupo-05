const path = require("path");

const db = require("../database/models");

const { validationResult } = require("express-validator");
const { Op } = require("sequelize");

const productsController = {
    vinoteca: async (req, res) => {
        try {
            const vinos = await db.Vinos.findAll({
                include: [
                    { association: "vinoBodega" },
                    { association: "vinoCategoria" },
                ],
                order: [["nombre", "ASC"]],
            });
            res.render("products/vinoteca", {
                vinos: vinos,
                link: "/detalle/" + vinos.id,
            });
        } catch (error) {
            console.error(error);
        }
    },

    buscarProducto: async (req, res) => {
        try {
            const nombre = req.query.nombre;
            const vinos = await db.Vinos.findAll({
                include: [
                    { association: "vinoBodega" },
                    { association: "vinoCategoria" },
                ],
                where: {
                    nombre: { [Op.like]: "%" + nombre + "%" },
                },
            });
            res.render("products/vinoteca", {
                vinos: vinos,
                link: "/editarProductos/" + vinos.id,
            });
        } catch (error) {
            console.error(error);
        }
    },

    detalleProducto: (req, res) => {
        db.Vinos.findByPk(req.params.id, { include: { all: true } }).then(
            (vino) => {
                let cava = false;
                let favorito = false


                if (req.session.loggedUser) {
                    for (let id of vino.usuario_cava_id) {
                        if (id.id == req.session.loggedUser.id) {
                            cava = true;
                        }
                    }
                    for (let id of vino.usuario_favorito_id) {
                        if (id.id == req.session.loggedUser.id) {
                            favorito = true;
                        }
                    }
                }

                res.render("products/detalleProducto", {
                    vino: vino,
                    cava, favorito
                });
            }
        );
    },

    agregarProducto: async (req, res) => {
        try {
            let bodegas = await db.Bodegas.findAll();
            let uvas = await db.Uvas.findAll();
            let categorias = await db.Categorias.findAll();
            res.render("products/agregarProducto", {
                bodegas,
                uvas,
                categorias,
            });
        } catch (err) {
            console.log(err);
        }
    },

    store: async (req, res) => {
        let bodegas = await db.Bodegas.findAll();
        let uvas = await db.Uvas.findAll();
        let categorias = await db.Categorias.findAll();
        let errors = validationResult(req);
        console.log(req.body);
        console.log(errors);
        if (errors.isEmpty()) {
            db.Vinos.create({
                nombre: req.body.nombre,
                imagen: req.file.path.split("public").pop(),
                bodega_id: req.body.bodega_id,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                anio: req.body.anio,
                uva_id: req.body.uva_id,
                categoria_id: req.body.categoria_id,
                stock: req.body.stock,
            });
            res.redirect("/products/vinoteca");
        } else {
            res.render("products/agregarProducto", {
                errors: errors.errors,
                old: req.body,
                bodegas,
                uvas,
                categorias,
            });
        }
    },

    editarProducto: async (req, res) => {
        try {
            let vino = await db.Vinos.findByPk(req.params.id);
            let bodegas = await db.Bodegas.findAll();
            let uvas = await db.Uvas.findAll();
            let categorias = await db.Categorias.findAll();
            if (vino) {
                res.render("products/editarProducto", {
                    vino: vino,
                    pageTitle: vino.nombre,
                    bodegas,
                    uvas,
                    categorias,
                });
            } else {
                res.send("No seleccionaste ningún vino");
            }
        } catch (error) {
            console.error(error);
        }
    },

    actualizarProducto: async (req, res) => {
        try {
            let errors = validationResult(req);
            console.log(errors);
            let bodegas = await db.Bodegas.findAll();
            let uvas = await db.Uvas.findAll();
            let categorias = await db.Categorias.findAll();
            if (errors.isEmpty()) {
                const id = req.params.id;
                await db.Vinos.update(
                    {
                        nombre: req.body.nombre,
                        bodega_id: req.body.bodega_id,
                        precio: req.body.precio,
                        descripcion: req.body.descripcion,
                        imagen: req.file.path.split("public").pop(),
                        uva_id: req.body.uva_id,
                        categoria_id: req.body.categoria_id,
                    },
                    {
                        where: {
                            id: req.params.id,
                        },
                    }
                );
                /* Cambiar la información de uva, categoría y bodega */
                res.redirect("/products/detalle/" + req.params.id);
            } else {
                const vino = await db.Vinos.findByPk(req.params.id);
                res.render("products/editarProducto", {
                    vino: vino,
                    pageTitle: vino.nombre,
                    errors: errors.errors,
                    bodegas,
                    uvas,
                    categorias,
                });
            }
        } catch (error) {
            console.error(error);
        }
    },

    eliminarProducto: async (req, res) => {
        const id = req.params.id;
        const vino = await db.Vinos.findByPk(id, {
            include: [
                { association: "vinoBodega" },
                { association: "vinoUva" },
                { association: "vinoCategoria" },
            ],
        });

        console.log(vino.vinoBodega);

        // HAY QUE ARREGLAR ESTO!!

        if (vino) {
            res.render("products/eliminarProducto", {
                vino: vino,
                pageTitle: vino.nombre,
            });
        }
    },

    borrarProducto: async (req, res) => {
        try {
            const id = req.params.id;

            await db.Vinos.destroy({ where: { id: id }, force: true });
            res.redirect("/products/vinoteca");
        } catch (err) {
            console.log(error);
        }
    },
    agregarCava: async (req, res) => {
        try {
            let vinoDb = await db.Cavas.findOne({
                where: {
                    UsuarioId: req.session.loggedUser.id,
                    VinoId: req.params.id,
                },
            });

            if (vinoDb) {
                await db.Cavas.destroy({
                    where: { id: vinoDb.id },
                    force: true,
                });

                res.redirect("/products/detalle/" + req.params.id);
            } else {
                await db.Cavas.create({
                    UsuarioId: req.session.loggedUser.id,
                    VinoId: req.params.id,
                });

                res.redirect("/products/detalle/" + req.params.id);
            }
        } catch (error) {
            console.log(error);
        }
    },
    agregarFavorito: async (req, res) => {
        try {
            let vinoDb = await db.Favoritos.findOne({
                where: {
                    UsuarioId: req.session.loggedUser.id,
                    VinoId: req.params.id,
                },
            });

            console.log('hellloooooo!');

            if (vinoDb) {
                await db.Favoritos.destroy({
                    where: { id: vinoDb.id },
                    force: true,
                });

                res.redirect("/products/detalle/" + req.params.id);
            } else {
                await db.Favoritos.create({
                    UsuarioId: req.session.loggedUser.id,
                    VinoId: req.params.id,
                });

                res.redirect("/products/detalle/" + req.params.id);
            }
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = productsController;
