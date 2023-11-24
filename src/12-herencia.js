// Clase Padre
class Person {
    constructor(
        name
        ) {
        this.name = name
    }

    greet() {
        console.log(`Hello I am ${this.name}`);
    }
}

// Clase Hijo
class Developer extends Person {
    constructor (
        name
    ) {
        super(name)
    }

    writeCode(coffee) {
        coffee 
        ? console.log('I am developing a new feature') 
        : console.log('I need coffee, please');
    }
}

const dev = new Developer('Cande');
dev.greet();
dev.writeCode();