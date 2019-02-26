import { TOGGLE } from '../actions/index';
import initialState from './initialState';

 const toggle = (state = initialState.toggle, action) => {
    switch (action.type) {
        case TOGGLE:
            return !action.value;
        default:
            return state;
    }
}
export default toggle;