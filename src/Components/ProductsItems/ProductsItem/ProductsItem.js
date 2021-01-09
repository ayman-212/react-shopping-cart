import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import classes from "./ProductsItem.module.css";
import Button from "../../UI/Button/Button";

const productsItem = (props) => (
    <Fade bottom big>
        <li className={classes.ProductsItem}>
            <div className={classes.Product}>
                <Link
                    to={{
                        pathname: "/",
                        search: "?" + props.id,
                    }}
                    id={props.id}
                    onClick={props.openModal}>
                    <img src={props.image} alt={props.title} />
                    <p>{props.title}</p>
                </Link>
                <div className={classes.ProductPriceAndOrder}>
                    <p>${props.price} </p>
                    <Button
                        clicked={props.addToCart}
                        btnType="Success">Add To Cart</Button>
                </div>
            </div>
        </li>
    </Fade>

);

export default productsItem