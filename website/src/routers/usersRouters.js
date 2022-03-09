const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");
const ifLogged = require("../Middlewares/ifLogged");
const ifNotLogged = require("../Middlewares/ifNotLogged");
const onlyUser = require("../Middlewares/onlyUser");
const onlyAdmin = require("../Middlewares/onlyAdmin.js");
const validateAccountLogin = require("../Middlewares/validaciones/backend/validateAccountLogin");
const validateAccountRegister = require("../Middlewares/validaciones/backend/validateAccountRegister");
const uploadFile = require("../Middlewares/multerMiddlewareUsers");

router.get("/registro", ifLogged, usersController.registro);
router.post(
    "/registro",
    uploadFile.single("imagen"),
    validateAccountRegister,
    usersController.registroProcesado
);

router.get("/registro-admin", onlyAdmin, usersController.registroAdmin);
router.post(
    "/registro-admin",
    onlyAdmin,
    uploadFile.single("imagen"),
    validateAccountRegister,
    usersController.registroAdminProcesado
);

router.get("/login", ifLogged, usersController.login);
router.post("/login", validateAccountLogin, usersController.loginProcess);

router.get("/cuenta", ifNotLogged, usersController.cuenta);

router.get("/editar/:id", ifNotLogged, usersController.editarCuenta);
router.put(
    "/editar/:id",
    uploadFile.single("imagen"),
    validateAccountRegister,
    usersController.actualizarCuenta
);

router.get("/logout", usersController.logout);

router.get("/cava", ifNotLogged, onlyUser, usersController.cava);

module.exports = router;
