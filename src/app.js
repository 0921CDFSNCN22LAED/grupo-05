const express = require("express");
const app = express();
const path = require("path");
const mainRouters = require("./routers/mainRouters.js");
const productsRouters = require("./routers/productsRouters.js");
const usersRouters = require("./routers/usersRouters.js");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Servidor funciona");
});

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

app.use("/", mainRouters);
app.use("/products", productsRouters);
app.use("/users", usersRouters);
