import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/* --- Action Generators --- */
// ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default: return state;
    }
};

//Filters reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default: return state;
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};


// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer, //Key is property, Value is reducer
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch returns object it inserted
const expenseOne = store.dispatch(addExpense({ description: 'Hello world', amount: 22 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 2 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

const demoState = {
    expenses: [{
        id: 'asldasd',
        description: 'January Rent',
        note: 'This was final pay',
        amount: 54500, //Cents is better instead of decimal points
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', //maybe also "amount"
        startDate: undefined,
        endDate: undefined
    } 
};