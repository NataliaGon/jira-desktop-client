import {TO_PIN} from "../components/draggable-box/issue.constants";

const initialState = {
  pin:[]
};

export default function pinReducer(state = initialState, action?:any) {
  const issue = action.issue
  switch (action.type) {
    case TO_PIN:
      return {
        pin:[...state.pin, issue ]
      }
    default:
      return state;
  }
}