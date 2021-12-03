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

const controladorHome = {
  index: (req, res) => {
    res.render("users/index");
  },

  registro: (req, res) => {
    res.render("users/register");
  },

  login: (req, res) => {
    res.render("users/login");
  },
  cuenta: (req, res) => {
    res.render('users/cuenta')
  }

}

module.exports = controladorHome;
