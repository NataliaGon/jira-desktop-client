import {TO_PIN} from "../components/draggable-box/issue.constants";

const initialState = {
  pin: []
};

export default function pinReducer(state = initialState, action?:any) {
  console.log(action.type);
  console.log(action);
  const issue = action.data
  switch (action.type) {
    case TO_PIN:
      console.log('yes');
      return {...state.pin, issue }
    default:
      return state;
  }
}