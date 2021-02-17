//obtener lo que hay en el título
console.log(document.title);
//modificar el título
document.title = "Prueba de título"
console.log(document.title);

//obtener lo que tengo en el body
console.log(document.body);

//obtener todos los elementos de h1
var h1 = document.getElementsByTagName('h1');
console.log(h1);

//como devuelve un arreglo, puedo acceder a cada elemento
//a través del índice y modificarlo
h1[0].innerHTML = 'Prueba';
console.log(h1);

//obtengo el boton
var boton = document.getElementById('boton');
console.log(boton);

//le agrego un evento
boton.addEventListener('click', mensaje);


function mensaje(){
    alert('Mensaje');
}