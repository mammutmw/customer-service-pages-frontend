import { takeEvery } from "redux-saga/effects";
import { SET_CURRENT_URL } from "../actions/bcrumb";

export function* handleSetURL({ payload }) { };

export function* watchHandleSetCurrenUrl() {
  yield takeEvery(SET_CURRENT_URL, handleSetURL);
};
