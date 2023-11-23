function greet() {
    let greeting = 'Hello world';
    console.log('local', greeting);
}

greet();
console.log('global', greeting);

// Cuando la variable esta desclarada dentro de un bloque, tiene scope local y no se puede acceder a su valor desde scope global.