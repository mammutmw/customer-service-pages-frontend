import { LOADING_PAGES } from "../actions";

// default state
const initialState = { pages: true };
// Reducer
const loading = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case LOADING_PAGES:
      return { ...state, pages: payload };
    default:
      return state;
  }
};
export default loading;
