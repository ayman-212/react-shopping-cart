import React from "react";
import Zoom from "react-reveal/Zoom";

import Button from "../../UI/Button/Button";
import classes from "./ProductDetails.module.css";

const productDetails = (props) => (
    <Zoom>
        <div className={classes.CloseModal}>
            <Button
                btnType="Remove"
                clicked={props.closeModal}
            >x</Button>
        </div>
        <div className={classes.ProductDetails}>
            <img src={props.details.image} alt={props.details.title} />
            <div className={classes.ProductInfo}>
                <h2>{props.details.title}</h2>
                <p>{props.details.description}</p>
                <p>Available sizes:{" "}
                    {props.details.availableSizes.map(size => {
                        return (
                            <Button
                                btnType="Remove"
                                key={size}>
                                {size}
                            </Button>
                        );
                    })}
                </p>
                <div className={classes.ProductPrice}>
                    <p>${props.details.price}</p>
                    <Button
                        btnType="Success"
                        clicked={() => {
                            props.addToCart(props.details);
                            props.closeModal();
                        }}>
                        Add To Cart
                    </Button>
                </div>
            </div>

        </div>
    </Zoom>
);

export default productDetails;