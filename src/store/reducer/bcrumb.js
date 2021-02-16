import { ROUTE_BASE } from "../../constants/routes";

let initialState = [];

const currentURLReducer = (state = initialState, { type, payload } = {}) => {
    //We clone the state and use it throughout the reducer.
    const clonedState = initialState.map(a => Object.assign({}, a));
    switch (type) {
        case "ADD":
            clonedState.push(payload);
            if (payload.url === ROUTE_BASE) {
                return [...clonedState];
            } else return [...state, ...clonedState];
        case "REMOVE":
            //We first need all the items in the state. In the clone, we push all items.
            //That way we can splice and remove from last item to current position.
            clonedState.push(...state);
            //Always returns a negative number, that's why it removes starting from the last item up to the current position.
            clonedState.splice(clonedState.length - payload);
            return [...clonedState];
        default:
            return state;
    }
};
export default currentURLReducer;
