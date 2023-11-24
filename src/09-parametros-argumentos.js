// Parametro es number.
function getDouble(number) {
    return number * 2;
}
// Argumento es 10.
getDouble(10);

// Se recomienda asignar maximo 3 parametros a una funcion para evitar que sea dificil de entender.

// Parametro por defecto
function greet(person = "strange") {
    console.log("Hello " + person);
}

greet();
greet('Christopher');

// Parametro rest o spread operator

// Sin uso de rest
function add(x, y) {
    console.log(x + y);
}

add(1, 2, 3, 4, 5); // Ignora la funcion los argumentos a partir del 3.

// Uso de rest
// Ejemplo 1
function add(...params) {
    console.log(params.reduce((prev, current) => prev + current, 0));
}

add(1, 2, 3, 4, 5);

// Ejemplo 2
function add(x, y, ...params) {
    console.log(params);
}

add(1, 2, 3, 4, 5);

// Tambien sirve el spread operator para clonar objetos y arrays.
// Objeto
const course = {
    title: 'JavaScript Definitivo',
    content: 'Todo lo que necesitas saber',
};

const courseCloned = Object.assign({}, course); // Antes de ES6 se clonadba de esta manera
const spreadCourseCloned = {...course};

console.log("ANTES", courseCloned, "ES6", spreadCourseCloned);

// Array
const numbers = [1, 2, 3];

const cloneNumbers = numbers.slice();
const spreadCloneNumbers = [...numbers];

console.log("ANTES", cloneNumbers, "ES6", spreadCloneNumbers);

// Concatenar arrays

const numbers1 = [1, 2, 3, 4]; 
const numbers2 = [5, 6, 7, 8];

newNumbers = [...numbers1, ...numbers2];
console.log(newNumbers);