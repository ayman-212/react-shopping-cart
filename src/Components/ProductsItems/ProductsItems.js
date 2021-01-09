import React, { useEffect } from "react";

import ProductsItem from "./ProductsItem/ProductsItem";
import classes from "./ProductsItems.module.css";


const ProductsItems = (props) =>{
    useEffect(()=>{
        if(window.location.search.length > 0 && document.getElementById(window.location.search.slice(1)) ){
            document.getElementById(window.location.search.slice(1)).click()
        }
    }, [])
   return (
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
    );
} 

export default ProductsItems;