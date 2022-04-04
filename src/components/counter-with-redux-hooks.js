import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from '../Redux/actions/counter';
import { INCREMENT, DECREMENT, RESET } from "../Redux/types/counter";


// It's a component to display how the code works without redux
const CounterWithReduxHooks = () => {
    // useSelector to work as MapStateToProps
    const count = useSelector(state => state.count);
    // useDispatch works as MapDispatchToProps
    const dispatch = useDispatch()

    // increment function
    const increment = () => {
        dispatch({
            type: INCREMENT
        });
    }
    // decrement function
    const decrement = () => {
        dispatch({
            type: DECREMENT
        });
    }
    return (
        <div>
            <h1>Counter with redux hooks</h1>
            <button onClick={increment}>
                +
            </button>
            <span>
                {count}
            </span>
            <button onClick={decrement}>
                -
            </button>
        </div>
    )
}
export default CounterWithReduxHooks;