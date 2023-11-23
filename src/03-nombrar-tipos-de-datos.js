// Como nombrar segun el tipo de dato.

// Arrays en Plural.
// No recomendado
const user = ["Alex", "Mariana", "Cande"];
// Regular
const userList = ["Alex", "Mariana", "Cande"];
// Bueno
const users = ["Alex", "Mariana", "Cande"];
// Excelente
const userNames = ["Alex", "Mariana", "Cande"];

// Booleanos con prefijos "is", "has" y "can".
// No recomendado
const valid = true;
const read = false;
const color = true;
// Recomendado
const isValid = true;
const canRead = false;
const hasColor = true;

// Numeros con prefijo "min", "max" y "total".
// No recomendado
const userss = 15;
// Recomendado
const maxUsers = 50;
const minUsers = 10;
const totalUsers = 15;

// Funciones con verbo + sustantivo / get + name.
// No recomendado
createUserIfNotExist();
updateUserIfNotEmpty();
sendEmailIfIsValid();
// Recomendado
createUser();
updateUser();
sendEmail();
// Existen funciones de acceso, modificacion o predicato.
getUser(); // Acceso
setUser(); // Modificacion
isValidUser() // Predicado

// Clases con sustantivos (no genericos).
// No recomendado
class Data {};
class Manager {};
class Info {};
// Recomendado
class User {};
class UserProfile {};
class Account {};