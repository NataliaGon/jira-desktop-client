import {TO_PIN} from "../components/draggable-box/issue.constants";

const initialState = {
  pin:[]
};

export default function pinReducer(state = initialState, action?:any) {
  const issue = action.issue
  switch (action.type) {
    case TO_PIN:

      function checkIndex(item:any){
       return  issue.id != item.id
      }
     if(state.pin.every(checkIndex)){
      return {
        pin:[...state.pin, issue ]
      }
     }
     
    default:
      return state;
  }
}