window.addEventListener('load', function(){
    let formulario = querySelector('login-form-container')
    formulario.addEventListener('submit', function(e){
        let errores = [];

        let usuarioEmail = document.querySelector("#email");
        if(!usuarioEmail.value  == ""){
            errores.push("Por favor, ingresa un usuario valido");
        }
        let usuarioPassword = document.querySelector("#password");
        if(!usuarioPassword.value == ""){
            errores.push("Por favor, ingresa una contraseña valida");
        }
        console.log(errores);
        if(error.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector(".hola")

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
            }
        }
    
    })
});