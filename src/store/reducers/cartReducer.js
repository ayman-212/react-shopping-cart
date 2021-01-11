import * as actionTypes from "../actions/actionTypes";

const initialState = {
    cartItems:
        localStorage.getItem("cartItems") ?
            JSON.parse(localStorage.getItem("cartItems"))
            :
            [],
    totalPrice:
        localStorage.getItem("price") ?
            JSON.parse(localStorage.getItem("price"))
            :
            0,
    showingCheckout: false,
    order: null,
    loading: false
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
            const updatedPrice = updatedCartItems.reduce((a, b) => {
                return a + b.price * b.count
            }, 0)
            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
            localStorage.setItem("price", JSON.stringify(updatedPrice));
            return {
                ...state,
                cartItems: updatedCartItems,
                totalPrice: updatedPrice
            };

        case actionTypes.REMOVE_ITEM:
            const upCartItems = state.cartItems.filter(item => {
                return item._id !== action.item._id
            });
            const upPrice = upCartItems.reduce((a, b) => {
                return a + b.price * b.count
            }, 0);
            localStorage.setItem("cartItems", JSON.stringify(upCartItems));
            localStorage.setItem("price", JSON.stringify(upPrice));
            if (upCartItems.length === 0) {
                state.showingCheckout = false
            }
            return {
                ...state,
                cartItems: upCartItems,
                totalPrice: upPrice,
            }
        case actionTypes.PROCESSING_CHECKOUT_FORM:
            return {
                ...state,
                showingCheckout: true
            }
        case actionTypes.PURCHASE_ORDER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: {
                    ...action.order,
                    id: action.id
                }
            }
        case actionTypes.PURCHASE_ORDER_FAIL:
            return {
                ...state,
                loading: false
            }
        default: return state;

    }
};

export default reducer;