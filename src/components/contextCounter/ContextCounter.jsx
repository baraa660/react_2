import React, { useContext } from 'react'
import { CountContext } from '../../context/Context';

export default function ContextCounter() {

const {count , setCount} = useContext(CountContext);

const handleIncrement =()=>{
    setCount(count+1)
}

const handleDecrement =()=>{
    setCount(count-1)
}
  return (
    <div>
        <h1>Context counter</h1>
      <p> {count} </p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>

    </div>
  )
}
