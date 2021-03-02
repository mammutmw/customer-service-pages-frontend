// Modules
import { call, put, takeEvery } from "redux-saga/effects";

// Api
import { getPages } from "../../services/api";

// tempral data
import pagesData from "../../services/mock/pages";

// action constants
import {
  FETCH_CMS_TOPICS_REQUEST,
  FETCH_CMS_TOPICS_SUCCCESS,
  LOADING_PAGES
} from "../actions";

// Saga
export function* handleFetchCMSTopics() {
  try {
    // Temporal untill api is deployed

    if (process.env.NODE_ENV !== "production") {
      const { data } = yield call(getPages, {
        market: "poc",
        environment: "dev"
      });

      yield put({
        type: FETCH_CMS_TOPICS_SUCCCESS,
        payload: data
      });
      yield put({ type: LOADING_PAGES, payload: false });
    } else {
      console.log("USEING STATIC DATA......");
      yield put({ type: LOADING_PAGES, payload: false });
      yield put({ type: FETCH_CMS_TOPICS_SUCCCESS, payload: pagesData });
    }
  } catch (error) {
    // TODO: Handle errors
    // again to get a new token
    yield put({ type: LOADING_PAGES, payload: false });
    console.log("handleFetchCMSTopics::error", error);
  }
}

export function* watchFetchCMSTopics() {
  yield takeEvery(FETCH_CMS_TOPICS_REQUEST, handleFetchCMSTopics);
}
