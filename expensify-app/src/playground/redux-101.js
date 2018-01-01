import { createStore } from 'redux';



const add = ({ a, b }, c) => {
    return a + b + c;
};

console.log(add({ a:1 , b:12 }, 100));



// "Action Generators" - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are PURE functions. Output is only determined by input. NO global varibles should be inside
// 2. Never directly change state or action. Always return an object with those properties.
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'RESET':
            return { count: 0 };
        case 'SET':
            return { count: action.count }
        default:
            return state;
    }
};

const store = createStore(countReducer);

//unsubscribe(); //Call this whenever you want to stop it
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// //I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 101 }));

store.dispatch(setCount({ count: 1111 }));

store.dispatch(resetCount());