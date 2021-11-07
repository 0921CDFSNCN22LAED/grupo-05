const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Servidor funciona");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/cava", (req, res) => {
  res.sendFile(path.join(__dirname, "views/cava.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/detalle-producto", (req, res) => {
  res.sendFile(path.join(__dirname, "views/detalleProducto.html"));
});