/*Escribir un programa que calcule el porcentaje de un valor de un producto
que ingresamos.*/

let cantidad = parseFloat(prompt("Ingresa una cantidad:"));
let porcentaje = parseFloat(prompt("Ingresa el porcentaje a calcular:"));

let resultado = cantidad * (porcentaje / 100);

console.log("El " + porcentaje + "% de " + cantidad + " es: " + resultado);

