var nameVar = 'Edwin';
var nameVar = 'Coronado';
console.log('nameVar', nameVar);

let nameLet = 'Edwin';
nameLet = 'Coronado';
console.log('nameLet', nameLet);

const nameConst = 'Edwin';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Edwin Coronado';

if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log("Inside ", firstName);
}

console.log(firstName);