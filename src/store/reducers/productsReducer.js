import data from "../../data.json";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    products: data.products,
    size: "",
    sort: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FILTER_PRODUCTS:
            if (action.value === "ALL") {
                return {
                    ...state,
                    products: data.products,
                    size: action.value
                }
            } else {
                return {
                    ...state,
                    products: data.products.filter(product => {
                        return product.availableSizes.indexOf(action.value) >= 0;
                    }),
                    size: action.value
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