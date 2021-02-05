import React from "react";

import classes from "./CartHeader.module.css";

const cartHeader = (props) => {
    let style = {
        color: "rgba(32, 48, 64, 0.5)",
        fontSize: "28px",
    }

    let cart = (<div className={classes.CartHeader}>
        <p>Your cart is empty aaaaa</p>
        <i
            className='fas fa-cart-arrow-down'
            style={style}>
        </i>
    </div>);

    if (props.length > 0) {
        style = {
            color: "#203040",
            fontSize: "28px",
            position: "relative",
            overFlow: "visible",
            paddingLeft: "15px"
        }
        cart = (
            <div className={classes.CartHeader}>
                <i
                    className='fas fa-cart-arrow-down'
                    style={style}>
                    <span>{props.length}</span>
                </i>
            </div>
        )

    }

    return cart
}
export default cartHeader;