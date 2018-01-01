// console.log('EDWIN');

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// // const name = person.name;
// // const age = person.age;

// // Another way of extracting properties
// //const { name, age } = person;

// // You can also do this for nested objects
// const { city, temp } = person.location;

// // You can also rename them and give a default value (ie: tijuana)
// const { city: ciudad = 'Tijuana', temp: temperatura } = person.locaction;

// // You can also set defaults 
// const { name = 'Anonymous', age } = person;

// console.log(`${person.name} is ${person.age}.`);

/* -------- Array Destructuring ---------- */

const address = ['1268 Calle Candelero', 'Chula Vista', 'CA', '91910'];

// For Object destructuring we use {}, for array destructuring we use []
//const [street, city, state, zip] = address;

//You can skip the ones you don't want
const [, city, state,] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumPrice, ] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);