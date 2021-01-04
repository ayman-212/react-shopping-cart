import React from 'react';

import classes from "./Filter.module.css";

const filter = (props) => (

    <div className={classes.Filter}>
        <p>{props.count} Products</p>
        <div>
            <label>Order</label>
            <select onChange={props.sortProducts} value={props.sort} >
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
        </div>
        <div>
            <label>Filter</label>
            <select onChange={props.filterProducts} value={props.size}>
                <option value="ALL">ALL</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">Xl</option>
                <option value="XXL">XXl</option>
            </select>
        </div>

    </div>
)
    
export default filter;
