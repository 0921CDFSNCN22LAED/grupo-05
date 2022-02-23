window.addEventListener("load", function () {
    console.log("hola");
    let form = document.querySelector(".editarProducto-form-container");

    form.addEventListener("submit", function (e) {
        let errores = [];

        let nombre = document.getElementById("nombre");
        if (nombre.value.length == 0) {
            errores.push("Debes indicar un nombre.");
        }

        let precio = document.getElementById("precio");
        if (precio.value.length == 0) {
            errores.push("Debes indicar un precio.");
        }

        let anio = document.getElementById("anio");
        if (anio.value.length == 0) {
            errores.push("Debes indicar un año.");
        }

        let stock = document.getElementById("stock");
        if (stock.value.length == 0) {
            errores.push("Debes indicar el stock disponible.");
        }

        let descripcion = document.getElementById("descripcion");
        if (descripcion.value.length == 0) {
            errores.push("Debes completar el campo de descripción.");
        }

        let imagen = document.getElementById("imagen");
        if (imagen.value.length == 0) {
            errores.push("Debes subir una imagen.");
        }

        console.log(errores);
        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector(".errores-front");

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
            }
        }
    });
});
