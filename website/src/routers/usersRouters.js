const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");
const ifLogged = require("../Middlewares/ifLogged");
const ifNotLogged = require("../Middlewares/ifNotLogged");
const validateAccountLogin = require("../Middlewares/validaciones/backend/validateAccountLogin");
const validateAccountRegister = require("../Middlewares/validaciones/backend/validateAccountRegister");
const uploadFile = require("../Middlewares/multerMiddlewareUsers");
const path = require("path");

router.get("/registro", ifLogged, usersController.registro);
router.post(
    "/registro",
    uploadFile.single("imagen"),
    validateAccountRegister,
    usersController.registroProcesado
);

router.get("/login", ifLogged, usersController.login);
router.post("/login", validateAccountLogin, usersController.loginProcess);

router.get("/cuenta", ifNotLogged, usersController.cuenta);

router.get("/logout", usersController.logout);

router.get("/cava", ifNotLogged, usersController.cava);

module.exports = router;
