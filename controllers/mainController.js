const path = require("path");

const vinos = [
  {
    id: 1,
    nombre: "Vino 1",
    descripcion: "Un vino muy bueno",
    precio: "$1000",
    imagen: "/images/vino1.jpeg",
  },
  {
    id: 2,
    nombre: "Vino 1",
    descripcion: "Un vino muy bueno",
    precio: "$1000",
    imagen: "/images/vino1.jpeg",
  },
  {
    id: 3,
    nombre: "Vino 1",
    descripcion: "Un vino muy bueno",
    precio: "$1000",
    imagen: "/images/vino1.jpeg",
  },
  {
    id: 4,
    nombre: "Vino 1",
    descripcion: "Un vino muy bueno",
    precio: "$1000",
    imagen: "/images/vino1.jpeg",
  },
  {
    id: 5,
    nombre: "Vino 1",
    descripcion: "Un vino muy bueno",
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

}
module.exports = controladorHome;
