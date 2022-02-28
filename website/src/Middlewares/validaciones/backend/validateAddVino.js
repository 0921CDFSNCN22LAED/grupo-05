const path = require("path");
const { body } = require("express-validator");

const validateAddVino = [
    body("nombre")
        .notEmpty()
        .isLength({ min: 5 })
        .withMessage("Tienes que escribir un nombre"),
    body("precio")
        .notEmpty()
        .isInt()
        .withMessage("Tienes que indicar el precio"),
    body("anio").notEmpty().isInt().withMessage("Tienes que indicar el año"),
    body("stock").notEmpty().isInt().withMessage("Tienes que indicar el stock"),
    body("descripcion")
        .notEmpty()
        .isLength({ min: 20 })
        .withMessage("Tienes que escribir una descripción"),
    body("imagen").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg"];

        if (!file) {
            throw new Error("Tienes que subir una imagen");
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(
                    `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
                        ", "
                    )}`
                );
            }
        }
        return true;
    }),
];

module.exports = validateAddVino;
