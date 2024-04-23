import { DECREMENT, INCREMENT } from "./types"


export const incrementAction =()=>{
    return {
        type:INCREMENT,
        value:1
    }
}

export const decrementAction =()=>{
    return {
        type:DECREMENT,
        value:1
    }
}

