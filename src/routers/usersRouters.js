const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");
const ifLogged = require("../Middlewares/ifLogged");
const ifNotLogged = require("../Middlewares/ifNotLogged");

/* EXPRESS VALIDATOR PARA ACCOUNT*/

const { check } = require("express-validator");

const { body } = require("express-validator");

let validateAccountLogin = [
    check("email").notEmpty().withMessage("Debes completar el mail"),
    check("password").notEmpty().withMessage("Debes completar la contrasena"),
];

let validateAccountRegister = [
    check("name").notEmpty().withMessage("Debes completar tu nombre"),
    check("email")
        .notEmpty()
        .withMessage("Debes completar el mail")
        .isEmail()
        .withMessage("Debes ingresar un email valido"),
    check("birthday")
        .notEmpty()
        .withMessage("Debes completar tu fecha de cumpleaños"),
    check("dni").notEmpty().withMessage("Debes completar con tu dni"),

    check("password")
        .notEmpty()
        .withMessage("Debes completar con tu contraseña"),
    body("confirm-password").custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error("Tus contraseñas deben ser iguales");
        }
        return true;
    }),
];

router.get("/registro", ifLogged, usersController.registro);
router.post(
    "/registro",
    validateAccountRegister,
    usersController.registroProcesado
);

router.get("/login", ifLogged, usersController.login);
router.post("/login", validateAccountLogin, usersController.loginProcess);

router.get("/cuenta", ifNotLogged, usersController.cuenta);

router.get("/logout", usersController.logout);

router.get("/cava", ifNotLogged, usersController.cava);

module.exports = router;
