const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const usersController = require("../controllers/usersControllers");

//guardado de archivos de multer
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, path.join(__dirname, "../public/images/img-users"))
    },
    filename: (req, res, cb) => {
        const newFilename = "user-" + Date.now();
        cb(null, newFilename);
    }
});

const upload = multer({ storage: storage });

/* EXPRESS VALIDATOR PARA ACCOUNT*/

const { check } = require('express-validator');

const { body } = require("express-validator");

let validateAccountLogin = [
    check('email').notEmpty().withMessage('Debes completar el mail'),
    check('password').notEmpty().withMessage('Debes completar la contrasena')
]

let validateAccountRegister = [
    check("name").notEmpty().withMessage("Debes completar tu nombre"),
    check("email").notEmpty().withMessage("Debes completar el mail").isEmail().withMessage("Debes ingresar un email valido"),
    check("birthday").notEmpty().withMessage("Debes completar tu fecha de cumpleaños"),
    check("dni").notEmpty().withMessage("Debes completar con tu dni"),
    check("imagen-usuario").notEmpty().withMessage("Completa con una imagen valida"),
    check("password").notEmpty().withMessage("Debes completar con tu contraseña"),
    body("confirm-password").custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error("Tus contraseñas deben ser iguales")
        }
        return true;
    })
]



router.get("/registro", usersController.registro);
router.post("/registro", upload.single("imagen-usuario"), usersController.registroProcesado);

router.get("/login", usersController.login);
router.post("/login", usersController.loginProcess);


router.get("/cuenta", usersController.cuenta);

router.post("/login", validateAccountLogin, usersController.loginProcess)


module.exports = router;
