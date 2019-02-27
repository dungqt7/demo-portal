import { fork, all } from "redux-saga/effects";
import watchToggle from './toggle';
import watchShow from './show';
import watchToggle1 from './toggle1';
import watchToggle2 from './toggle2'
export default function* root() {
    yield all([
        fork(watchToggle),
        fork(watchShow),
        fork(watchToggle1),
        fork(watchToggle2)
    ])
}