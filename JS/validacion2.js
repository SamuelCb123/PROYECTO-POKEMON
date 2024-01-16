" use strict";
const nombre = document.getElementById("name");


let contraseña = document.getElementById("pass");
let parrafo = document.getElementById("warnings");
let form = document.querySelector('form'); 

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";

    
    if (nombre.value.length < 3) {
        warnings += `El nombre es demasiado corto <br>`;
    }

   

    if (contraseña.value.length < 3) {
        warnings += `La contraseña es demasiado corta<br>`;
    }

    if (warnings === "") {

        window.location.href = 'perfil.html';
    } else {
   
        parrafo.innerHTML = warnings;
    }
});

