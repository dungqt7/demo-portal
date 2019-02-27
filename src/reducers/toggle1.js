import { TOGGLE1 } from '../actions/index';
import initialState from './initialState';

const toggle1 = (state = initialState.toggle1, action) => {
    switch (action.type) {
        case TOGGLE1:
            return !action.value;
        default:
            return state;
    }
}
export default toggle1;