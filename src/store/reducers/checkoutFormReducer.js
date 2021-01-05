import * as actionTypes from "../actions/actionTypes";

const initialState = {
    showingCheckout: false
};

const reducer = (state = initialState, action) => {
    switch ((action.type)) {
        case actionTypes.PROCESSING_CHECKOUT_FORM:
            return {
                ...state,
                showingCheckout: true
            }

        default: return state
    }
};

export default reducer;