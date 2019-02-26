 import { combineReducers } from 'redux';
 import toggle from './toggle';
 import show from './show';
 const rootReducer = combineReducers({
     toggle,
     show
 });
 export default rootReducer;