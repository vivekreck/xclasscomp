import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter App</h1>
            <div>Count: {count}</div>
            <br />
            <button onClick={() => setCount((c) => c + 1)} >Increment</button>
            <button onClick={() => setCount((c) => c - 1)} >Decrement</button>

        </>
    );
};