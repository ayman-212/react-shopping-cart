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
                    cartItems={this.props.cartIt} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        cartIt: state.cart.cartItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveItem: (cartItem) => dispatch(actions.removeItem(cartItem))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);