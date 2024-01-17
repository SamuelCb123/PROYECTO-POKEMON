"use strict";
function eliminarFila(button) {//creacion de una funcion a la que llamaremos eliminar fila que toma por parametro un boton
    let confirmacion = confirm("¿Estás seguro de que quieres eliminar esta fila?");//creamos una variable llamada confirmacion a la que asignamos
    if (confirmacion) {              //que muestra un cuadro dialogo.El resultado se guardara en la variable confirmacion
       let row = button.parentNode.parentNode;//si se acepta la fila se eliminara para esto obtenemos el nodo padre del boton
        row.parentNode.removeChild(row);//y utilizaremos remove para eliminar la fila sd
    }
}