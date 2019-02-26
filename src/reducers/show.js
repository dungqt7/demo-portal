import { SHOW } from '../actions/index';
var initstalState = false

const show = (state = initstalState, action) => {
    switch (action.type) {
        case SHOW:
            return state = !state
        default:
            return state;
    }
}
export default show;