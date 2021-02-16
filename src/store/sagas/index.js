// Sagas
import { all } from "redux-saga/effects";
import { watchHandleSetCurrenUrl } from "./bcrumb";

//All saga functions
import { watchFetchAuthToken } from "./../sagas/auth";
import { watchFetchCMSTopics } from "./../sagas/pages";

export default function* rootSaga() {
  try {
    // Pass into the array each imported watch saga
    // Example :
    // import { watchUser } from "store/sagas/user";
    // watchUser(),

    yield all([
      watchFetchAuthToken(),
      watchFetchCMSTopics(),
      watchHandleSetCurrenUrl()
    ]);
  } catch (error) {
    // error management depending on production or dev environments
    if (process.env.NODE_ENV === `development`) {
      console.log("ERROR FROM ROOT SAGA ", error);
    }
  }
}
