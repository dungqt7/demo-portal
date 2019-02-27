import { takeLatest, put } from "redux-saga/effects";
import { TOGGLE2, TOGGLE2_ASYNC } from "../actions/index";
import { store } from "../index";

function* toggle2Async() {
    yield put({ type: TOGGLE2, value: store.getState().toggle2 });
}

export default function* watchToggle2() {
    yield takeLatest(TOGGLE2_ASYNC, toggle2Async);
}