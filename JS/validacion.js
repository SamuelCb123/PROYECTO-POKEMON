"use strict";

let registroButton = document.getElementById('registro');//accede a los elementos con el id asignado
let iniciarsesion = document.getElementById('iniciarsesion');


let nombre = document.getElementById("name"); //accede a cada input del formulario(name,subname.email,pass)
let apellido = document.getElementById("subname");
let correo = document.getElementById("email");
let contraseña = document.getElementById("pass");
let parrafo = document.getElementById("warnings");
let form = document.querySelector('form'); 

form.addEventListener("submit", e => {
    e.preventDefault();//iniciciazion de un evento que seactivara cuando se pulse en el boton 
    let warnings = "";//creamos una cadena vacia en la que se guardara el mensaje que le aparecera al usuario si este introduce los datos incorrectos
    let caracteres = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //cadena de expresiones regulares que usaremos para la validacion del email
    
    if (nombre.value.length < 3) {
        warnings += `El nombre es demasiado corto <br>`; //condicional en el que si pone de los me
    }

    if (!caracteres.test(correo.value)) { //comprueba  si los campos introducidos en correo no coinciden con las expresiones regulares 
                                          // devolvera un mensaje 
        warnings += `El correo no es válido <br>`;
    }

    if (contraseña.value.length < 3) {//verifica si la longitud de la contraseña es menor a  3 recibira un mensaje 
        warnings += `La contraseña es demasiado corta<br>`;
    }

    if (warnings === "") {//si no tienen ninguna advertencia va a redirigir a la página de iniciar sesion
  
        window.location.href = 'iniciarsesion.html';
    } else {
     
        parrafo.innerHTML = warnings;
    }
});

