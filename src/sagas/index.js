import { takeLatest, put, all, fork } from "redux-saga/effects";

function* toggleAsync() {
    yield put({ type: "TOGGLE_ASYNC" });
}

function* watchToggle() {
    yield takeLatest("TOGGLE", toggleAsync);
}

function* showAsync() {
    yield put({ type: "SHOW_ASYNC" });
}

function* watchShow() {
    yield takeLatest("SHOW", showAsync);
}
export default function* root() {
    yield all([
        fork(watchToggle),
        fork(watchShow)
    ])
}