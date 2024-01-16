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
    

    let carousel = document.querySelector('.carousel');
let inner = document.querySelector('.carousel-inner');
let prev = document.querySelector('.carousel-prev'); 
let next = document.querySelector('.carousel-next'); 
let imgwidth = document.querySelector('img').clientWidth;

let currentIndex = 0;
prev.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = Math.max(currentIndex - 1, 0);
    inner.style.transform = `translateX(-${currentIndex * imgwidth}px)`; 
});

next.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = Math.min(currentIndex + 1, inner.childElementCount - 1); 
    inner.style.transform = `translateX(-${currentIndex * imgwidth}px)`; 
});

