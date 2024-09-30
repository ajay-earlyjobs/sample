import {useEffect, useState} from 'react'

const CounterL = () => {
  
  const initialValue = parseInt(localStorage.getItem("currentValue")) || 0;
  const [currentValue,increValue] = useState(initialValue) 

  const onIncrement = () => {
        increValue(currentValue+1)
  }

  const onDecrement = () => {
    increValue(currentValue-1)
  } 

  useEffect( () => {
    localStorage.setItem("currentValue",currentValue);
  },[currentValue]);
  return(
    <div>
    <h1>Counter Application</h1> 
    <p>The current value is {currentValue}</p> 
    <button onClick={onIncrement}>Increase</button> 
    <button onClick={onDecrement}>Decrease</button>
  </div>
  )
}

export default CounterL;