const { createStore } = require("redux")

// constant
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
const RESET = 'RESET'

const initialState = {
    count: 0
}

const increment = () => {
    return {
        type: INCREMENT
    }
}
const decrement = () => {
    return {
        type: DECREMENT
    }
}

const reset = () => {
    return {
        type: RESET
    }
}

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

const counterReducer = (state = initialState, action) => {
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
    console.log(store.getState());
})

store.dispatch(incrementCounterByValue(12))