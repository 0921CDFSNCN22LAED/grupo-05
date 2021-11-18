const path = require ("path");

const controladorHome = {
    index: ("/", (req, res) => {
        res.render ("index");
    }),

    cava: ("/cava", (req, res) => {
        res.render ("cava");
      }),

    registro: ("/register", (req, res) => {
        res.render ("register");
      }),

    login: ("/login", (req, res) => {
        res.render ("login");
      }),

    detalleProducto: ("/detalle-producto", (req, res) => {
        res.render ("detalleProducto");
      }),

      
      
    }
    module.exports = controladorHome;