import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

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

export const processingCheckoutForm = () => {
    return {
        type: actionTypes.PROCESSING_CHECKOUT_FORM
    }
}

const purchaseOrderStart = () => {
    return {
        type: actionTypes.PURCHASE_ORDER_START
    }
}

const purchaseOrderSuccess = (key, orderData) => {
    return {
        type: actionTypes.PURCHASE_ORDER_SUCCESS,
        id: key,
        order: orderData
    }
}

const purchaseOrderFail = () => {
    return {
        type: actionTypes.PURCHASE_ORDER_FAIL
    }
}
export const purchaseOrder = (order) => {
    return dispatch => {
        dispatch(purchaseOrderStart());
        setTimeout(() => {
            axios.post("/orders.json", order)
                .then(response => {
                    dispatch(purchaseOrderSuccess(response.data.name, order))
                })
                .catch(error => {
                    dispatch(purchaseOrderFail())
                });
        }, 300);
    }
}