/*
    Arreglos
*/

var nombres = ['Grover', 'Carlos', 'Ana', 'Luisa'];
var vegetales = ['Tomate', 'Lechuga', 'Zanahoria'];

//accedo a un elemento por indice
console.log(nombres[3]);
console.log(vegetales[1]);

//modifico el valor, accediendo desde el indice
nombres[0] = 'José';
vegetales[2] = 'Nabo';
console.log(nombres[0]);
console.log(vegetales[2]);


//Operaciones con arreglos

//devuelve la cantidad de elementos que tiene un arreglo
console.log(nombres.length);

//recorrer el arreglo
//Forma 1
for (var i=0 ; i<=nombres.length-1 ; i++){
    console.log(nombres[i]);
}

//Forma 2
vegetales.forEach(function(elemento, indice){
    console.log(elemento, indice);
})


//imprimir el arreglo
console.log(nombres);

//agregar elemento al final de la lista
nombres.push('Pedro');
console.log(nombres);

//agregar elemento al principio de la lista
nombres.unshift('Lili');
console.log(nombres);

//quitar último elemento
nombres.pop(nombres);
console.log(nombres);

//quitar primer elemento de un arreglo
nombres.shift();
console.log(nombres);


//saber indice de uno de los elementos
var pos = nombres.indexOf('Carlos');
console.log(pos);

//eliminar un elemento de cualquier posición
//le indico por parámetro que elimine a partir del indice 1 -> 1 elemento
nombres.splice(1, 1);
console.log(nombres);