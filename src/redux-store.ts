import {createStore, combineReducers } from "redux";
import  {REDUX_DEVTOOLS } from 'electron-devtools-installer';
import pinReducer from "./reducers/pinReducer";


const reducer = combineReducers({
    pin: pinReducer
})

export default createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
 