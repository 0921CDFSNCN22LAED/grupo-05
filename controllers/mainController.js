const path = require("path");

const vinos = [
  {
    id: 1,
    nombre: "Vino 1",
    descripcion: "Cabernet 2018",
    precio: "$1000",
    imagen: "/images/vino1.jpeg",
  },
  {
    id: 2,
    nombre: "Vino 2",
    descripcion: "Malbec 2019",
    precio: "$1000",
    imagen: "/images/vino2.jpeg",
  },
  {
    id: 3,
    nombre: "Vino 3",
    descripcion: "Malbec 2016",
    precio: "$1000",
    imagen: "/images/vino3.jpeg",
  },
  {
    id: 4,
    nombre: "Vino 4",
    descripcion: "Cabernet 2010",
    precio: "$1000",
    imagen: "/images/vino1.jpeg",
  },
  {
    id: 5,
    nombre: "Vino 5",
    descripcion: "Malbec 2012",
    precio: "$1000",
    imagen: "/images/vino1.jpeg",
  }
];


const controladorHome = {
  index: (req, res) => {
    res.render("users/index");
  },

  cava: (req, res) => {
    res.render("users/cava");
  },

  registro: (req, res) => {
    res.render("users/register");
  },

  login: (req, res) => {
    res.render("users/login");
  },

  detalleProducto: (req, res) => {
    res.render("products/detalleProducto");
  },

  vinoteca: (req, res) => {
    res.render("products/vinoteca", { vinos: vinos });
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
      res.render("products/editarProductos" , {
        vino: vino,
        pageTitle: vino.nombre,
      });
    } else {
      res.send("No contamos con ese vino")
    };
    
  },
}
module.exports = controladorHome;
