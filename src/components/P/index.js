import { useState } from "react";

const Practise = () => {

    const [count,setCounter] = useState(0); 

    const onIncrement = () => {
        setCounter(count+1)
    }

    const onDecrement = () => {
        setCounter(count-1)
    }

    return(
        <div>
            <h1>Counter {count}</h1> 
            <button onClick={onIncrement}>Increment</button> 
            <button onClick={onDecrement}>Decrement</button>
        </div>
    )
} 

export default Practise;