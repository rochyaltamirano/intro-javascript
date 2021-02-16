/*
    Ejemplo de usos de funciones
*/
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

/*
    argumentos de una funcion
*/

function sumar(a, b, c){
    return a + b + c;
}

var result = sumar(4, 5, 8);
console.log('Resultado: ' + result);

//el tercer elemento es opcional para pasar como parámetro
//por eso se le asigna un valor por defecto
function sumar2(a, b, c=3){
    return a + b + c;
}

var result = sumar2(4, 5);
console.log('Resultado2: ' + result);

//funciones como expresiones -> funciones anónimas
var suma = function (a, b, c){
    return a + b + c;
}

var res = suma(1, 2, 4);
console.log(res);