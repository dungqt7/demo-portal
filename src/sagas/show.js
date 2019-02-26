import { takeLatest, put } from "redux-saga/effects";
import { SHOW ,SHOW_ASYNC } from "../actions/index";
import { store } from "../index";
function* showAsync() { 
    yield put({ type: SHOW, value: store.getState().show});
}
export default function* watchShow() {
    yield takeLatest(SHOW_ASYNC, showAsync);
}