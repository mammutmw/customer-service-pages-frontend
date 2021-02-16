import { FETCH_CMS_TOPICS_SUCCCESS } from "../actions";

// default state
const initialState = [];
// Reducer
const topicsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case FETCH_CMS_TOPICS_SUCCCESS:
      const { items } = payload;
      return [...items];
    default:
      return state;
  }
};
export default topicsReducer;
