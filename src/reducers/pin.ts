import {TO_PIN} from "../components/issue/issue.constants";
import {DELETE_PIN} from "../components/pin-issue/pin-issue.constants";

const initialState = {
  pin:[]
};

export default function pinReducer(state = initialState, action?:any) {
  
  switch (action.type) {
    case TO_PIN:
      function checkIndex(item:any){
       return  issue.id != item.id
      }
     const issue = action.issue
     if(state.pin.every(checkIndex)){
      return {
        pin:[...state.pin, issue ]
      }
     }
     case DELETE_PIN:
     const issues = state.pin.filter(i=>i.id != action.data);
     return {pin: issues}

    default:
      return state;
  }
}