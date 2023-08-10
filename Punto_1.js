//Escribir un algoritmo que valide si la suma de 2 números es positiva, negativa o cero.

let a = parseInt(prompt("Ingresa el valor de a:"));
let b = parseInt(prompt("Ingresa el valor de b:"));

let suma = a + b;

if (suma < 0) {
    console.log("La suma es negativa");
} else if (suma > 0) {
    console.log("La suma es positiva");
} else {
    console.log("La suma es cero");
}
