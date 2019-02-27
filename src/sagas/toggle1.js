import { takeLatest, put } from "redux-saga/effects";
import { TOGGLE1, TOGGLE1_ASYNC } from "../actions/index";
import { store } from "../index";

function* toggle1Async() {
    console.log(store.getState().toggle1);
    yield put({ type: TOGGLE1, value: store.getState().toggle1 });
}

export default function* watchToggle1() {
    yield takeLatest(TOGGLE1_ASYNC, toggle1Async);
}