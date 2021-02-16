import { FETCH_AUTH_TOKEN_SUCCCESS } from "./../actions";

// default state
const initialState = {};
// Reducer
const auth = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case FETCH_AUTH_TOKEN_SUCCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default auth;
