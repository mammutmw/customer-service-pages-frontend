import { SET_RECOMENDED_TOPICS } from "../actions";

// default state
const initialState = [];
// Reducer
const recomendedTopics = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_RECOMENDED_TOPICS:
      return payload;
    default:
      return state;
  }
};
export default recomendedTopics;
