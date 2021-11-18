const path = require ("path");

const controladorHome = {
    index: ("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.ejs"));
    }),

    cava: ("/cava", (req, res) => {
        res.sendFile(path.join(__dirname, "../views/cava.ejs"));
      }),

    registro: ("/register", (req, res) => {
        res.sendFile(path.join(__dirname, "../views/register.ejs"));
      }),

    login: ("/login", (req, res) => {
        res.sendFile(path.join(__dirname, "../views/login.ejs"));
      }),

    detalleProducto: ("/detalle-producto", (req, res) => {
        res.sendFile(path.join(__dirname, "../views/detalleProducto.ejs"));
      }),

      
      
    }
    module.exports = controladorHome;