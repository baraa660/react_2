import { DECREMENT, INCREMENT } from "../actions/types";

const counterReducer =(state={count:0}, action )=>{

    switch (action.type){
        case INCREMENT:
            return {...state,count:state.count+action.value}

        case DECREMENT:
            return {...state,count:state.count-action.value}

        default:
            return state;        
    }

}

export default counterReducer