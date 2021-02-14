/*
    Sentencia if..else
*/

var nombre = 'Josefa';
var esCasado = false;

if (esCasado == true){
    console.log(nombre + ' es casad@.');
} else{
    console.log(nombre + ' es solter@.');
}

//If anidados
var nombre = 'Luis';
var edad = 60;

//edad < 12 -> es un niño
//edad > 11 y edad < 18 -> es un adolescente
//edad > 17 y edad < 60 -> es un adulto
//edad > 60 es un anciano

if (edad < 8){
    console.log(nombre + ' es un niño');
} else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente');
} else if ((edad >17) && (edad < 60)){
    console.log(nombre + ' es un adulto');
} else {
    console.log(nombre + ' es un anciano');
}