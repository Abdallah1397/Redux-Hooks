import React, { useState } from "react";

// It's a component to display how the code works without redux
const Counter = () => {
    // count state
    const [count, setCount] = useState(0);
    // increment function
    const increment = () => {
        setCount(count + 1);
    };
    // decrement function
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter without redux hooks</h1>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    );
};
export default Counter;
