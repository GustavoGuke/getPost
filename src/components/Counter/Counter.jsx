import React, {  useState } from 'react'

export default function Counter() {

    const [counter, setCounter] = useState(0)

    function handleCounter(){
        setCounter(counter+1)
    }
    function handleCounterSmall(){
        setCounter(counter-1)
    }
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={handleCounterSmall}>-</button><span>{counter}</span>
        <button onClick={handleCounter}>+</button>
    </div>
  )
}
