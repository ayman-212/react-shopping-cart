import * as actionTypes from "../actions/actionTypes";

const initialState = {
    products: null,
    size: "",
    sort: "",
    error: false,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.products,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                error: true,
                loading: false
            }
        case actionTypes.FILTER_PRODUCTS_START:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case actionTypes.FILTER_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        case actionTypes.FILTER_PRODUCTS_SUCCESS:
            if (action.value === "ALL") {
                return {
                    ...state,
                    products: action.products,
                    size: action.value,
                    loading: false,
                    error: false
                }
            } else {
                return {
                    ...state,
                    products: action.products.filter(product => {
                        return product.availableSizes.indexOf(action.value) >= 0;
                    }),
                    size: action.value,
                    loading: false,
                    error: false
                }
            }
        case actionTypes.SORT_PRODUCTS:
            const updatedState = [...state.products];
            updatedState.sort((a, b) => {
                switch (action.value) {
                    case "lowest": return a.price - b.price;
                    case "highest": return b.price - a.price;
                    default: return (a._id > b._id) ? 1 : -1;
                }
            });
            return {
                ...state,
                products: updatedState,
                sort: action.value
            }
        default: return state;
    }
}

export default reducer;