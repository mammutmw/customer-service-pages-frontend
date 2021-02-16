import { takeEvery, put, select } from "redux-saga/effects";
import { SET_CURRENT_URL } from "../actions/bcrumb";
import { selectCurrentPosition } from "../../store/selectors";
//Constants
import {
  ROUTE_BASE,
  ROUTE_GET_HELP,
  ROUTE_GET_SUPPORT
} from "../../constants/routes";

//All component pages must go here for the Breadcrumb
const routing = [
  { url: ROUTE_BASE, location: "Customer service" },
  { url: ROUTE_GET_HELP, location: "Contact us" },
  { url: ROUTE_GET_SUPPORT, location: "Get support" }
];

export function* handleSetURL({ payload }) {
  const currentPosition = yield select(selectCurrentPosition);
  //statePosition represents the lenght and therefore position of the state. It returns a number.
  const statePosition = currentPosition.length;
  //Pointer represents where the user currently is in the "routing" array. It returns a number.
  const pointer = routing.findIndex((e) => e.url === payload);
  //Browser always shows "Customer service" as the first crumb
  if (pointer === 0) {
    yield put({ type: "ADD", payload: routing[0] });
    //If user refreshes the browser, everything remains the same. Pointer + 1 because initially there's already 1 item in the state (Customer service)
  } else if (pointer + 1 === statePosition) {
    return null;
  }
  //From here we ADD items to the breadcrumb.
  else if (pointer > statePosition - 1) {
    //Accumulated represents all the items from 0 to the current Position where the user is.
    let accumulated = routing.filter(
      (element) => routing.indexOf(element) <= pointer
    );
    //Then every one of those items are stored in result variable and send each one (with the loop) to the reducer as a payload.
    let result;
    for (let i = 0; i < accumulated.length; i++) {
      result = accumulated[i];
      yield put({ type: "ADD", payload: result });
    }
    //From here we REMOVE items from the breadcrumb. Just the pointer position is sent to the reducer.
  } else if (pointer < statePosition) {
    yield put({ type: "REMOVE", payload: pointer });
  }
}

export function* watchHandleSetCurrenUrl() {
  yield takeEvery(SET_CURRENT_URL, handleSetURL);
}
