"use strict";

    let check = document.getElementById("check");
    let pass = document.getElementById("pass");
   
    let año = document.getElementById("año");

    if (check && pass) {
        check.onclick = togglePassword;
    }

    function togglePassword() {
        if (check.checked) {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    }

   
    let añoActual = new Date().getFullYear();

    if (año) {
        año.textContent = añoActual;
    } else {
        console.error('No hay elemento año.');
    }
;
