const express = require("express");
const app = express();
const path = require("path");
const mainRouters = require("./routers/mainRouters.js");
const productsRouters = require("./routers/productsRouters.js");
const usersRouters = require("./routers/usersRouters.js");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const ifAdmin = require("./Middlewares/ifAdmin.js");
const recordameMiddleware = require("./Middlewares/recordameMiddleware");
const navBarDiscriminator = require("./Middlewares/navBarDiscriminator");
const usuariosRouters = require("./routers/apiRouters/usuariosRouters");
const vinosRouters = require("./routers/apiRouters/vinosRouters");
const bodegasRouters = require("./routers/apiRouters/bodegasRouters");
const uvasRouters = require("./routers/apiRouters/uvasRouters");
const categoriasRouters = require("./routers/apiRouters/categoriasRouters");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));
app.use(
    session({ secret: "secreto", resave: false, saveUninitialized: false })
);
app.use(cookieParser());
app.use(cors(["http://localhost:3001/", "https://localhost:3001/"]));
app.use(ifAdmin);
app.use(recordameMiddleware);
app.use(navBarDiscriminator);
// <div key={bodega.id}>{bodega.nombre}</div>
//Servidor
app.listen(process.env.PORT || 3001, () => {
    console.log("Servidor funciona");
});

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

app.use("/", mainRouters);
app.use("/products", productsRouters);
app.use("/users", usersRouters);

app.use("/api/usuarios", usuariosRouters);
app.use("/api/vinos", vinosRouters);
app.use("/api/bodegas", bodegasRouters);
app.use("/api/uvas", uvasRouters);
app.use("/api/categorias", categoriasRouters);
