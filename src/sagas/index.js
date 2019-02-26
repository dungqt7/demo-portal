import { fork, all } from "redux-saga/effects";
import watchToggle from './toggle';
import watchShow from './show';

export default function* root() {
    yield all([
        fork(watchToggle),
        fork(watchShow)
    ])
}