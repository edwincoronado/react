class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}! I am ${this.age} years old`;
    }
}

const me = new Person('Edwin Coronado', 25);
console.log(me.getGreeting());