import { takeLatest, put } from "redux-saga/effects";

function* toggleAsync() {
  yield put({ type: "TOGGLE_ASYNC"});
}

export function* watchToggle() {
  yield takeLatest("TOGGLE", toggleAsync);
}