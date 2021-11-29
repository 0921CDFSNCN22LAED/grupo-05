const path = require("path");

const vinos = [
    {
        id: 1,
        nombre: "Vino 1",
        bodega: "",
        descripcion: "Cabernet 2018",
        precio: "$1000",
        imagen: "/images/vino1.jpeg",
        categoria: "",
    },
    {
        id: 2,
        nombre: "Vino 2",
        bodega: "",
        descripcion: "Malbec 2019",
        precio: "$1000",
        imagen: "/images/vino2.jpeg",
        categoria: "",
    },
    {
        id: 3,
        nombre: "Vino 3",
        bodega: "",
        descripcion: "Malbec 2016",
        precio: "$1000",
        imagen: "/images/vino3.jpeg",
        categoria: "",
    },
    {
        id: 4,
        nombre: "Vino 4",
        bodega: "",
        descripcion: "Cabernet 2010",
        precio: "$1000",
        imagen: "/images/vino1.jpeg",
        categoria: "",
    },
    {
        id: 5,
        bodega: "",
        nombre: "Vino 5",
        descripcion: "Malbec 2012",
        precio: "$1000",
        imagen: "/images/vino1.jpeg",
        categoria: "",
    }
];

const productsController = {
    cava: (req, res) => {
        res.render("users/cava");
    },
    detalleProducto: (req, res) => {
        res.render("products/detalleProducto");
    },

    vinoteca: (req, res) => {
        res.render("products/vinoteca", {
            vinos: vinos,
            link: "/editarProductos/" + vinos.id
        });
    },

    agregarProductos: (req, res) => {
        res.render("products/agregarProductos")
    },

    editarProductos: (req, res) => {
        const id = req.params.id;
        const vino = vinos.find((vino) => {
            return id == vino.id;
        });
        if (vino) {
            res.render("products/editarProductos", {
                vino: vino,
                pageTitle: vino.nombre,
            });
        } else {
            res.send("No seleccionaste ningun vino. Intenta /editarProductos/2")
        };
    },
}

module.exports = productsController