const path = require("path");
const { body } = require("express-validator");

const validateAddVino = [
    body("nombre").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("precio")
        .notEmpty()
        .isInt()
        .withMessage("Tienes que indicar el precio"),
    body("anio").notEmpty().isInt().withMessage("Tienes que indicar el año"),
    body("stock").notEmpty().isInt().withMessage("Tienes que indicar el stock"),
    body("descripcion")
        .notEmpty()
        .withMessage("Tienes que escribir una descripción"),
    body("bodega_id").notEmpty().withMessage("Tienes que elegir una bodega"),
    body("categoria_id")
        .notEmpty()
        .withMessage("Tienes que elegir una categoría"),
    body("uva_id").notEmpty().withMessage("Tienes que elegir un tipo de uva"),
    body("imagen").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png"];

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
