import Calculadora from './calculadora.js';

const calc = new Calculadora();

console.log("La multiplicacion es:", calc.multiplicar(5, 3));
console.log("La division es:", calc.dividir(10, 2));

try {
    console.log(calc.dividir(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}