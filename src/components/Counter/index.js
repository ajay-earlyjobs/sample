import { useState } from "react"

const Counter = () => {

    const [initialValue,updateValue] = useState(0); 

    const onIncrement = () => {
            updateValue(initialValue+1)
    }

    const onDecrement = () => {
        updateValue(initialValue-1)
}

    return(
        <div>
            <h1>Counter Application</h1> 
            <p>The current Value is {initialValue}</p> 
            <button onClick={onIncrement}>Increase</button> 
            <button onClick={onDecrement}>Decrease</button>
        </div>
    )
}

export default Counter;