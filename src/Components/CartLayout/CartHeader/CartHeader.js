import React from "react";

import classes from "./CartHeader.module.css";

const cartHeader = (props) => {
    let cart = (<div className={classes.CartHeader}>
        Cart is empty
    </div>);
    if (props.length > 0) {
        cart = (
            <div className={classes.CartHeader}>
                You have {props.length} in cart
            </div>
        )
    }

    return cart
}
export default cartHeader;