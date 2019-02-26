import { SHOW } from '../actions/index';
import initialState from './initialState';

const show = (state = initialState.show, action) => {
    switch (action.type) {
        case SHOW:
            return !action.value
        default:
            return state;
    }
}
export default show;