class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `Hi, I am ${this.name}! I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor())
            return description += ` My major is ${this.major}.`;
        else
            return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation())
            return greeting += `. My location is ${this.homeLocation}`;
        else 
            return greeting;
    }
}


const s = new Traveler('Edwin Coronado', 25);
console.log(s.getGreeting());
