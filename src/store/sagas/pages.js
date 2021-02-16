// Modules
import { call, put, takeEvery } from "redux-saga/effects";

// Api
import { getPages } from "../../services/api";

// action constants
import {
  FETCH_CMS_TOPICS_REQUEST,
  FETCH_CMS_TOPICS_SUCCCESS
} from "../actions";

// Saga
export function* handleFetchCMSTopics({ payload }) {
  try {
    const { data } = yield call(getPages, payload);

    yield put({ type: FETCH_CMS_TOPICS_SUCCCESS, payload: data });
  } catch (error) {
    // TODO: Handle errors
    // again to get a new token
    console.log("handleFetchCMSTopics::error", error);
  }
}

export function* watchFetchCMSTopics() {
  yield takeEvery(FETCH_CMS_TOPICS_REQUEST, handleFetchCMSTopics);
}
