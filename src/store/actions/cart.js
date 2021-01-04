import * as actionTypes from "./actionTypes";

export const addToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        product: product,
    }
};

export const removeItem = (cartItem) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        item: cartItem,
    }
}