/*Escribir un algoritmo que indique cuál es el mayor de tres números
ingresados.*/

let a, b, c;
a = 3;
b = 2;
c = 1;

if (a > b) {
    if (a > c) {
        console.log("El número " + a + " es el mayor de los tres.");
    } else {
        console.log("El número " + c + " es el mayor de los tres.");
    }
} else {
    if (b > c) {
        console.log("El número " + b + " es el mayor de los tres.");
    } else {
        console.log("El número " + c + " es el mayor de los tres.");
    }
}
