// Modules
import { call, put, takeEvery } from "redux-saga/effects";

// Api
import { getAuthToken } from "./../../services/api";

// action constants
import {
  FETCH_AUTH_TOKEN_REQUEST,
  FETCH_AUTH_TOKEN_SUCCCESS,
  FETCH_CMS_TOPICS_REQUEST,
  FETCH_CMS_TOPICS_SUCCCESS
} from "./../actions";

// Saga
export function* handleFetchAuthToken(payload) {
  try {
    // TODO: CHeck if token is expired before making call
    const { data } = yield call(getAuthToken);

    yield put({ type: FETCH_AUTH_TOKEN_SUCCCESS, payload: data });

    // Fetch topics anfter aquiring auth token
    yield put({ type: FETCH_CMS_TOPICS_REQUEST, payload: data.access_token });
  } catch (error) {
    // TODO: Check for expired token error status and call getOauthToken
    // again to get a new token
    console.log("handleFetchAuthToken::error", error);
  }
}

export function* watchFetchAuthToken() {
  yield takeEvery(FETCH_AUTH_TOKEN_REQUEST, handleFetchAuthToken);
}
