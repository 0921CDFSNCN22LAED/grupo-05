const productsService = require("../services/productsServices");
const vinos = productsService.getAll();


const controladorHome = {
  index: (req, res) => {
    res.render("users/index", { vinos });
  }
}

module.exports = controladorHome;
