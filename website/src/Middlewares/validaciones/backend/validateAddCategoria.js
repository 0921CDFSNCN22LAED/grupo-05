const { body } = require("express-validator");

const validateAddCategoria = [
    body("categoria")
        .notEmpty()
        .withMessage("Este campo debe estar completo.")
        .isLength({ min: 2 })
        .withMessage("Debe tener al menos 2 caracteres."),
];

module.exports = validateAddCategoria;
