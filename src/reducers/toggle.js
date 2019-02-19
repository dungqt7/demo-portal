import { TOGGLE } from '../actions/index';
var initstalState = false

 const toggle = (state = initstalState, action) => {
    switch (action.type) {
        case TOGGLE:
            return state = !state
        default:
            return state;
    }
}
export default toggle;