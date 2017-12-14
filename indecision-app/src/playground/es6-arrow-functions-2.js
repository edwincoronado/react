// If you NEED to access arguments (i.e: console.log(arguments) inside a function, you must use a normal es5 function

const add = (a, b) =>  {
    return a + b;
};
console.log(add(5,2));

// "this" keyword - no longer bound. If you need "this" use es5 fxn
const user = {
    name: 'Edwin',
    cities: ['Tijuana', 'San Diego'],
    printPlacesLived() {
        this.cities.forEach(city => {
            console.log(this.name + ' has lived in: ' + city)
        });
    }
};
user.printPlacesLived();

//Map differs from "forEach" because you can actually modify the value 
const user2 = {
    name: 'Edwin',
    cities: ['Tijuana', 'San Diego'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user2.printPlacesLived());

//Challenge
const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());