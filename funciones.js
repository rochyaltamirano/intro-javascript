function mensaje(msj){
    console.log(msj);
}

var msj = 'Mensaje como argumento de la función';
mensaje(msj);


function mensaje2 (){
    return 'Mensaje 2';
}

var msj = mensaje2();
console.log(msj);