// No recomendado
const yyyymmdstr = momemt().format("YYYY/MM/DD");
let arrayNames = ["Alex", "Mariana", "Cande"];

// Recomendado
const currentDate = moment().format("YYYY/MM/DD"); // Nombres pronunciables y expresivos.
let namesList = ["Alex", "Mariana", "Cande"]; // Nombres sin informacion tecnica.

// No recomendado
getUserInfo();
getClientData();
getCustomerRecord();

// Recomendado
getUser(); // Usar lenguaje ubicuo (palabras de uso en comun entre expertos).


