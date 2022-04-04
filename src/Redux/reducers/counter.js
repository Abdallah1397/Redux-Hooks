import { INCREMENT, DECREMENT, RESET } from "../types/counter";

// Initial state
const INITIAL_STATE = {
    count: 0,
};

// Reducer => function that changes the state of application
const CounterReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;
    switch (type) {
        case INCREMENT:
            return {
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                count: state.count - 1,
            };
        case RESET:
            return {
                count: 0,
            };
        default:
            return state;
    }
};
export default CounterReducer;
