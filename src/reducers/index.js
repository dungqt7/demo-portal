 import { combineReducers } from 'redux';
 import toggle from './toggle';
 import show from './show';
 import toggle1 from './toggle1';
 import toggle2 from './toggle2'
 const rootReducer = combineReducers({
     toggle,
     show,
     toggle1,
     toggle2
 });
 export default rootReducer;