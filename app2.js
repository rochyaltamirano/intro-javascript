/*
    Operadores Lógicos, Unarios y de asignación
    

*/

//Operadores Lógicos: <, >, <=, >=, ==
var edadAna, edadMaria, diferenciaEdad;

edadAna = 34;
edadMaria = 28;

//Mayor que
var mayorAna = edadAna > edadMaria;
console.log(mayorAna);

//Menor que
var mayorAna = edadAna < edadMaria;
console.log(mayorAna);

//Igual
var mayorAna = edadAna == edadMaria;
console.log(mayorAna);

//Negación
var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);


//Operadores Unarios: ++Incremento, --Decremento

edadAna++;
console.log(edadAna);

console.log(--edadMaria);

//Operadores de asignación: +=, -=, *=, /=, %=
var a = 11;
var b = 5;

var c = a % b; //residuo o resto de una división
console.log(c);

a += b; //a = a + b
console.log(a);