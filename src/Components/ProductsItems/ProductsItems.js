import React from "react";

import ProductsItem from "./ProductsItem/ProductsItem";
import classes from "./ProductsItems.module.css"

const productsItems = (props) => (
    <ul className={classes.ProductsItems}>
        {props.items.map(item => {
            return <ProductsItem
                key={item._id}
                title={item.title}
                price={item.price}
                image={item.image}
                id={item._id}
            />
        })}
    </ul>
);

export default productsItems;