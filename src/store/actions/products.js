import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

const fetchProductsSuccess = (fetchedData) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: fetchedData
    }
}

const fetchProductsFail = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
    }
}

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsStart());
        setTimeout(() => {
            axios.get("/products.json")
                .then(response =>
                    dispatch(fetchProductsSuccess(response.data))
                )
                .catch(error =>
                    dispatch(fetchProductsFail())
                )
        }, 1000);
    }
}

const filterProductsStart = () => {
    return {
        type: actionTypes.FILTER_PRODUCTS_START
    }
}

const filterProductsSuccess = (products, value) => {
    return {
        type: actionTypes.FILTER_PRODUCTS_SUCCESS,
        products: products,
        value: value
    }
}

const filterProductsFail = () => {
    return {
        type: actionTypes.FILTER_PRODUCTS_FAIL
    }
}

export const filterProducts = (eventValue) => {
    return dispatch => {
        dispatch(filterProductsStart());
        setTimeout(() => {
            axios.get("/products.json")
                .then(response =>
                    dispatch(filterProductsSuccess(response.data, eventValue))
                )
                .catch(error =>
                    dispatch(filterProductsFail())
                )
        }, 300);
    }
};

export const sortProducts = (event) => {
    return {
        type: actionTypes.SORT_PRODUCTS,
        value: event.target.value
    }
};