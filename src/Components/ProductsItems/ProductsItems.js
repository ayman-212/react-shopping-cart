import React from "react";
import Fade from "react-reveal/Fade"

import ProductsItem from "./ProductsItem/ProductsItem";
import classes from "./ProductsItems.module.css";


const productsItems = (props) => (
    <Fade bottom big>
        <ul className={classes.ProductsItems}>
            {props.items.map((item) => {
                return <ProductsItem
                    key={item._id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    id={item._id}
                    addToCart={() => props.addToCart(item)}
                    openModal={() => props.openModal(item)}
                />
            })}
        </ul>
    </Fade>
);

export default productsItems;