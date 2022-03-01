/* EXPRESS VALIDATOR PARA ACCOUNT*/

const { check } = require("express-validator");
const { body } = require("express-validator");

let validateAccountRegister = [
    check("name").notEmpty().withMessage("Debes completar tu nombre"),
    check("email")
        .notEmpty()
        .withMessage("Debes completar el mail")
        .isEmail()
        .withMessage("Debes ingresar un email valido"),
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

module.exports = validateAccountRegister;
