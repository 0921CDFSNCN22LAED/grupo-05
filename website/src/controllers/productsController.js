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
        db.Vinos.findByPk(req.params.id).then((vino) => {
            res.render("products/detalleProducto", { vino: vino });
        });
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

    store: (req, res) => {
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
                errors: errors.array(),
                old: req.body,
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
            if (errors.isEmpty()) {
                const id = req.params.id;
                await db.Vinos.update(
                    {
                        nombre: req.body.nombre,
                        bodega_id: 3,
                        precio: req.body.precio,
                        descripcion: req.body.descripcion,
                        imagen: req.file.path.split("public").pop(),
                        uva_id: 3,
                        categoria_id: 3,
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
                });
            }
        } catch (error) {
            console.error(error);
        }
    },

    eliminarProducto: async (req, res) => {
        const id = req.params.id;
        const vino = await db.Vinos.findByPk(id, {include: [
            {association: "vinoBodega"},
            {association: "vinoUva"},
            {association: "vinoCategoria"}
        ]});

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
};

module.exports = productsController;
