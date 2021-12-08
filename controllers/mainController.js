const path = require("path");

const productsService = require("../services/productsServices");

const vinos = productsService.getAll();

const controladorHome = {
  index: (req, res) => {
    res.render("users/index", { vinos });
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
