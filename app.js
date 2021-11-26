
const express = require("express");
const app = express();
const path = require("path");
const mainRouters = require("./routers/mainRouters.js");
const productsRouters = require("./routers/productsRouters.js")
const methodOverride = require('method-override');

const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Servidor funciona");
});

app.set('view engine', 'ejs');

app.use("/", mainRouters);
app.use("/products", productsRouters);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'))