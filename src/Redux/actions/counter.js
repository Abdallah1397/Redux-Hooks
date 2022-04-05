import { INCREMENT, DECREMENT, RESET } from "../types/counter";

export const increment = (status) => ({
    type: INCREMENT,
    payload: status,
});

export const decrement = (status) => ({
    type: DECREMENT,
    payload: status,
});

export const reset = () => ({
    type: RESET,
});
