window.addEventListener("load", function () {
    console.log("hola");

    let form = document.getElementById("form-bodega");

    form.addEventListener("submit", function (e) {
        let errores = [];
        let ulErrores = document.querySelector(".errores-front");
        let misErrores = document.querySelectorAll(".errores-front li");

        if (misErrores.length > 0) {
            ulErrores.innerHTML = "";
        }

        let bodega = document.getElementById("bodega");
        if (bodega.value.length == 0) {
            errores.push("Debes indicar el nombre de la bodega a agregar.");
        }

        console.log(errores);
        if (errores.length > 0) {
            e.preventDefault();

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
            }
        }
    });
});
