// 1.state
// 2. action -increment, decrement,reset
// 3. reducer will work based on action type
// 4. store. Three methods of store are: getState(),dispatch(),subscribe()

const { createStore } = require('redux')


// defining const
const ADD_USER = 'ADD_USER';


// state
const initialCounterState = {
    users: ['khalz'],
    count: 1,

}


// action -it is an object containing two things: type,payload
const addUser = (user) => {  //here incrementCounter is an action creator
    return {
        type: ADD_USER,
        payload: user
    };
};

// create reducer for counter (reducer is a pure function)
const userReducer = (state = initialCounterState, action) => {
    switch (action.type) {

        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        default:
            state;
    }
}

// create store
const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(addUser('khalidza'))
