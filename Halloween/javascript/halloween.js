/* funciones para utilizar en el ejercicio de halloween */

/* una función es un móduloque describe un algoritmo simple*/
/* suele tener parámetros, una variable, en este caso la imagen */
function mostrar(imagen){   
    document.getElementById(imagen).style.visibility="visible";
}
function ocultar(imagen){   
    document.getElementById(imagen).style.visibility="hidden";
}
function sonar(sonido){   
    document.getElementById(sonido).play();
}
function parar(sonido){   
    document.getElementById(sonido).pause();
}

function mostrar2(imagen){   
    document.getElementById(imagen).style.visibility="visible";
}
function ocultar2(imagen){   
    document.getElementById(imagen).style.visibility="hidden";
}
function sonar2(sonido){   
    document.getElementById(sonido).play();
}
function parar2(sonido){   
    document.getElementById(sonido).pause();
}