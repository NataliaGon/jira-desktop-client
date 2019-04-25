import {createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import pinReducer from "./reducers/pinReducer";


const reducer = combineReducers({
    pin: pinReducer
})

export default createStore(reducer,composeWithDevTools(
 
  ));
 