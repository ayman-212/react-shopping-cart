import * as actionTypes from "./actionTypes";


export const filterProducts = (event) => {
    return {
        type: actionTypes.FILTER_PRODUCTS,
        value: event.target.value
    }
};

export const sortProducts = (event) => {
    return {
        type: actionTypes.SORT_PRODUCTS,
        value: event.target.value
    }
};
