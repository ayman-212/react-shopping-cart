import React, { Component } from 'react';
import { connect } from "react-redux";

import classes from "./Cart.module.css";
import CartItems from "../../Components/CartItems/CartItems";
import * as actions from "../../store/actions/index";
import CartHeader from '../../Components/CartLayout/CartHeader/CartHeader';
import CartFooter from "../../Components/CartLayout/CartFooter/CartFooter";

class Cart extends Component {
    render() {
        return (
            <div className={classes.Cart}>
                <CartHeader length={this.props.cartIt.length} />
                <CartItems
                    cartItems={this.props.cartIt}
                    removeItem={this.props.onRemoveItem}
                />
                <CartFooter
                    length={this.props.cartIt.length}
                    totalPrice={this.props.pr.toFixed(2)}
                    showCheckout={this.props.onProcessingCheckoutForm} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        cartIt: state.cart.cartItems,
        pr: state.cart.totalPrice,
        loading: state.productsList.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveItem: (cartItem) => dispatch(actions.removeItem(cartItem)),
        onProcessingCheckoutForm : () => dispatch (actions.processingCheckoutForm())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);