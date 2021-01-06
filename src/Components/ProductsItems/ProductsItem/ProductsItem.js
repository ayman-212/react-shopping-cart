import React from "react";

import classes from "./ProductsItem.module.css";
import Button from "../../UI/Button/Button";

const productsItem = (props) => (
    <li className={classes.ProductsItem}>
        <div className={classes.Product}>
            <a
                href={"#" + props.id}
                onClick={props.openModal}>
                <img src={props.image} alt={props.title} />
                <p>{props.title}</p>
            </a>
            <div className={classes.ProductPriceAndOrder}>
                <p>${props.price} </p>
                <Button
                    clicked={props.addToCart}
                    btnType="Success">Add To Cart</Button>
            </div>
        </div>
    </li>
);

export default productsItem