import { useState } from "react";

function Counter(){
 const [count,setCount] = new useState(0);

 function handleIncrement(){
    setCount(c=>c+1);
 }

 function handleDecrement(){
    setCount(c=>c-1);
 }
 function handleReset(){
    setCount(0);
 }

 return <>
            <h3>Counter</h3>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
 
}

export default Counter;