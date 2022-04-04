import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from '../Redux/actions/counter';

// It's a component to display how the code works without redux
const CounterWithReduxHooks = () => {
    // useSelector to work as MapStateToProps to get countState
    const count = useSelector(state => state.countReducer.count);
    // useDispatch works as MapDispatchToProps
    const dispatch = useDispatch()
    // increment function
    const incrementFunction = () => {
        // dispatch({
        //     type: INCREMENT
        // });
        dispatch(increment());
    }
    // decrement function
    const decrementFunction = () => {
        // dispatch({
        //     type: DECREMENT
        // });
        dispatch(decrement());

    }
    // RESET Function
    const resetFunction = () => {
        // dispatch({
        //     type: RESET
        // })
        dispatch(reset());
    };

    return (
        <div>
            <h1>Counter with redux hooks</h1>
            <h4>
                {count}
            </h4>
            <button onClick={incrementFunction}>
                Increment
            </button>
            <button onClick={resetFunction}>
                Reset
            </button>
            <button onClick={decrementFunction}>
                Decrement
            </button>
        </div>
    )
}
export default CounterWithReduxHooks;