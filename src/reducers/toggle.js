import { TOGGLE } from '../actions/index';
export const toggle = (state = false, action) => {
    switch (action.type) {
        case TOGGLE:
            return state = true
        default:
            return state;
    }
}