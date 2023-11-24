// Ejemplo 1
const getResult = () => {
    return "Results"
}
console.log(getResult());
// Ejemplo 2
const getResult1 = () => "Results"
console.log(getResult1());


// sin arrow
const numbers = [1, 2, 3];
const numbersNew = numbers.map(function(n) {
    return n * 2;
});

// con arrow
const newNumbers = numbers.map((n) => n * 2);
console.log(numbersNew, newNumbers);

// Arrow functions cambian el comportamiento por defecto de this.
// con arrow
const counter = {
    number: 0,
    increse() {
        setInterval(() => console.log(++this.number), 1000);
    },
};
counter.increse();

// sin arrow
const counters = {
    number: 0,
    increse() {
        setInterval(function() {
            console.log(++this.number)
        }.bind(this), 1000);
    },
};
counters.increse();