import React from "react";

import Button from "../../UI/Button/Button";
import classes from "./CartItem.module.css";

const cartItem = (props) => (
    <li className={classes.CartItem}>
        <div className={classes.Title}>
            <img src={props.image} alt={props.title}></img>
            <p>{props.title}</p>
        </div>
        <div className={classes.Price}>
            <p>${props.price} x {props.count}</p>
            <Button
                btnType="Remove"
                clicked={props.removeItem}>Remove</Button>
        </div>
    </li>
);

export default cartItem;