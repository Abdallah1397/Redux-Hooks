import { INCREMENT, DECREMENT, RESET } from "../types/counter";

// Initial state
const INITIAL_STATE = {
    count: 0,
    status: ""
};

// Reducer => function that changes the state of application
const CounterReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case INCREMENT:
            return {
                count: state.count + 1,
                status: payload,
            };
        case DECREMENT:
            return {
                count: state.count - 1,
                status: payload,
            };
        case RESET:
            return {
                count: 0,
                status: "Normal Status"
            };
        default:
            return state;
    }
};
export default CounterReducer;
