import { TOGGLE2 } from '../actions/index';
import initialState from './initialState';

const toggle2 = (state = initialState.toggle2, action) => {
    switch (action.type) {
        case TOGGLE2:
            return !action.value;
        default:
            return state;
    }
}
export default toggle2;