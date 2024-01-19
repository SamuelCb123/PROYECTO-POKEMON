document.addEventListener('DOMContentLoaded', function () {
    let type1 = document.getElementById('type');
    let type2 = document.getElementById('type2');

    type1.addEventListener('change', function () { //
        // Establece un event listener para el evento change en el elemento type1
        let seleccionar = type1.value;// Obtiene el valor seleccionado en type1

        for (let i = 0; i < type2.options.length; i++) {  // Habilita todas las opciones en type2
            type2.options[i].disabled = false;
        }
        // Si se ha seleccionado un valor en type1
        if (seleccionar !== "") {
         
          let opciones = type2.querySelector('option[value="' + seleccionar + '"]');
            
            if (opciones) {
                opciones.disabled = true;
            }
        }
    });
});


let form = document.getElementById('pokemon'); //accede al elemento llamado
form.addEventListener("submit", e => {
    e.preventDefault(); //evento que se activa cuando se pulsa el boton

    let name = document.getElementById('name');
   
    let region = document.getElementById('region');
    let warnings = document.getElementById('warnings');
    let warningsText = "";

    if (name.value.trim() === "") {
        warningsText += `El campo "Nombre" no puede estar vacío <br>`;
    } else if (name.value.length < 3) {
        warningsText += `El nombre es demasiado corto <br>`;
    }
    else if (!/^[a-zA-Z]+$/.test(name.value.trim())) {
        warningsText += `El nombre solo debe contener letras <br>`;
    }
    

 

    if (region.value.trim() === "") { 
        warningsText += `El campo "Región" no puede estar vacío <br>`;
    } else if (region.value.length < 3) { //
        warningsText += `La región es demasiado corta <br>`;
    }

 

    if (warningsText === "") {
     
        alert("Pokemon creado"); //si no tiene ningun errorr al pulsar el boton  saltara un alert con pokemon creado.
    } else {
      
        warnings.innerHTML = warningsText;
    }
});

