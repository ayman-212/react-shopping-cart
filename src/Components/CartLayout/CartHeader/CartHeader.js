import React from "react";

import classes from "./CartHeader.module.css";

const cartHeader = (props) => {
    let style = {
        color: "#203040",
        fontSize: "28px"
    }

    let cart = (<div className={classes.CartHeader}>
        Your cart is empty
        <i
            class='fas fa-cart-arrow-down'
            style={style}>
        </i>
    </div>);

    if (props.length > 0) {
        style = {
            color: "#f0c040",
            fontSize: "28px"
        }
        cart = (
            <div className={classes.CartHeader}>
                You have {props.length} in cart
                <i
                    class='fas fa-cart-arrow-down'
                    style={style}>
                </i>
            </div>
        )

    }

    return cart
}
export default cartHeader;