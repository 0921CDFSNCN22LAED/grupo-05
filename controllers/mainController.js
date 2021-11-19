const path = require("path");

/*por que le ponemos HOME si desp agragamos registro, login, etc?*/

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


}
module.exports = controladorHome;