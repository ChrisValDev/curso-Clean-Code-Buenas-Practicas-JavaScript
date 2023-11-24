class Cat {
    constructor(
        cat
    ) {
        this.name = cat
    }
    greet() {
        return 'Hello, I am a cat and my name is ' + this.name;
    }
}

const cat = new Cat('Oliver');
console.log(cat.name);
console.log(cat.greet());