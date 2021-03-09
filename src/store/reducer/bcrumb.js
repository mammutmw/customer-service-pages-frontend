import { ROUTE_BASE, ROUTE_CUSTOMER_SERVICE, ROUTE_NL } from "../../constants/routes";

let initialState = [
    { url: ROUTE_NL, location: "Home" },
    { url: ROUTE_CUSTOMER_SERVICE, location: "Customer service" },
    { url: ROUTE_BASE, location: "Get support" }
];

const currentURLReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case "ADD":
            return [...state];
        default:
            return [...state];
    }
};
export default currentURLReducer;
