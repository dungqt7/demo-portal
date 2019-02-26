import { takeLatest, put } from "redux-saga/effects";
import { TOGGLE , TOGGLE_ASYNC } from "../actions/index";
import { store } from "../index";
function* toggleAsync() {
    yield put({ type: TOGGLE, value: store.getState().toggle});
}

export default function* watchToggle() {
    yield takeLatest(TOGGLE_ASYNC, toggleAsync);
}