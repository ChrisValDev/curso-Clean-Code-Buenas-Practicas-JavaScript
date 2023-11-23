let name = 'Mariana'; // Variable let se puede modificar el valor.
const PI = 3.14159; // Constantes siempre conservan el mismo valor.

// Uso de let

let age = 28;

{
    let age = 29;
    console.log('Valor dentro del bloque', age);
}

console.log('Valor fuera del bloque', age);
age = age * 2;
console.log("Valor cambiado", age);

// Uso de const

const UNICA = 50;
UNICA = 40;
console.log(UNICA); // No se puede cambiar valor y arroja error.