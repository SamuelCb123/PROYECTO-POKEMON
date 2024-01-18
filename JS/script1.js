"use strict";

    let check = document.getElementById("check"); //accede a 
    let pass = document.getElementById("pass");
   
    

    if (check && pass) { //comprueba si existen tanto check y pass si existe se le asignara la funcio togglepassword
        check.onclick = togglePassword;
    }

    function togglePassword() {
        if (check.checked) { //si se clicka en el en el checkbox mostrara el text de la contraseña(no estara oculta)
            pass.type = "text";
        } else { //si no se oculta la contraseña permanecera oculta
            pass.type = "password";
        }
    }

    let año = document.getElementById("año");
    let añoActual = new Date().getFullYear();//obtencion del año actual

    if (año) {
        año.textContent = añoActual;//si exite el año mostrara el año actualizado
    } else {
        console.error('No hay elemento año.');
    }


   //creamos una funcion para obtener la estacion actual atraves del mes 
    function getestacionactual() {
        let ahora = new Date();//obtenemos la fecha actual
        let mes = ahora.getMonth() + 1; //en js los meses van del 0 al 11 por eso le sumamos un +1 
    
        if (mes >= 3 && mes <= 5) { //determinacion de la estacion segun en el mes que se este
            return 'primavera';
        } else if (mes >= 6 && mes <= 8) {
            return 'verano';
        } else if (mes >= 9 && mes <= 11) {
            return 'otoño';
        } else {
            return 'invierno';
        }
    }
    
    function cambiarcolores() {//funcion para cambiar el color de las tarjetas segun en la estacion en la que nos encontremos
        let estacion = getestacionactual();//obtencion de la estacion actual
        let cards = document.querySelectorAll('.card');//seleccionamos todas las tarjeta con clard
       // Para cada tarjeta actualiza las clases de estación
        cards.forEach(card => {
           
            card.classList.add(estacion);
        }); 
    }
    //la funcion se activa cuando se ha cargado la página entera
    window.onload = cambiarcolores;
    

    
    function toggleMenu() {
        let menu = document.getElementById("menuBar");
        menu.classList.toggle("active");
    }
    

   let slider = document.querySelector("[data-slider]"); //seleciona el elemento que tiene el slider

   let track = slider.querySelector("[data-slider-track]");
  let prev = slider.querySelector("[data-slider-prev]");
  let next = slider.querySelector("[data-slider-next]");   //elementos  dentro del slider
    
    if (track) { //condicional en el que si se encuentra el elemento track
      prev.addEventListener("click", () => {//se configura el evento para 
        next.removeAttribute("disabled");// Configuro el evento click para el botón previo
    
        track.scrollTo({ //desplazar el track
          left: track.scrollLeft - track.firstElementChild.offsetWidth,
          behavior: "smooth"
        });
      });
    
      next.addEventListener("click", () => {
        prev.removeAttribute("disabled");
    
        track.scrollTo({
          left: track.scrollLeft + track.firstElementChild.offsetWidth,
          behavior: "smooth"
        });
      });
    
      track.addEventListener("scroll", () => {
        let trackScrollWidth = track.scrollWidth;
        let trackOuterWidth = track.clientWidth;
    
        prev.removeAttribute("disabled");
        next.removeAttribute("disabled");
    
        if (track.scrollLeft <= 0) {
          prev.setAttribute("disabled", "");
        }
    
        if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
          next.setAttribute("disabled", "");
        }
      });
    }
    

