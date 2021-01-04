import * as actionTypes from "../actions/actionTypes";

const initialState = {
    cartItems: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const updatedCartItems = [...state.cartItems];
            let alreadyInCart = false;
            updatedCartItems.forEach(cartItem => {
                if (cartItem._id === action.product._id) {
                    cartItem.count++;
                    alreadyInCart = true;
                }
            });
            if (!alreadyInCart) {
                updatedCartItems.push({
                    ...action.product,
                    count: 1
                });
            }
            return {
                ...state,
                cartItems: updatedCartItems,
            };

        case actionTypes.REMOVE_ITEM:
            const upCartItems = state.cartItems.filter(item => {
                return item._id !== action.item._id
            })
            return {
                ...state,
                cartItems: upCartItems,
            }

        default: return state;

    }
};

export default reducer;