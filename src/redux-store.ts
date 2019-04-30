import {createStore, combineReducers } from 'redux';
import pinReducer from './reducers/pin';
import filterReducer from './reducers/filter'

const reducer = combineReducers({
    pin: pinReducer,
    filterOption: filterReducer
})

export default createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
 