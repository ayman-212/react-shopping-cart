import React from "react";
import Fade from "react-reveal/Fade";

import Button from "../../UI/Button/Button";
import classes from "./CartItem.module.css";


const cartItem = (props) => (
    <Fade left>
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
    </Fade>


);

export default cartItem;

