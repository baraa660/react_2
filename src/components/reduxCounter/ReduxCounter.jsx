import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { decrementAction, incrementAction } from '../../redux/actions/counteractions';

export default function ReduxCounter() {
    const count = useSelector(state=>state.count)//const {count} = useSelector(state=>state)
    
    const dispatch = useDispatch();

    const handleIncrement =()=>{
        dispatch(incrementAction());
    }

    const handleDecrement =()=>{
        dispatch(decrementAction());
    }
  return (
    <div>
        <h1>Redux</h1>
      <p> {count} </p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>

    </div>
  )
}
