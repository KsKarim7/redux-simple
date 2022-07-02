const { createStore } = require('redux')

const INCREMENT = 'INCREMENT'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

// state 
const initialCounterState = {
    count: 0
}

// action 
const positiveCounter = () => {
    return {
        type: INCREMENT,
    };
};
const negativeCounter = () => {
    return {
        type: DECREMENT,
    };
};
const resetCounter = () => {
    return {
        type: RESET,
    };
};
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    };
};

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            state;
    }
}

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(positiveCounter())
store.dispatch(resetCounter())
store.dispatch(incrementCounterByValue(100))
// store.dispatch(negativeCounter())