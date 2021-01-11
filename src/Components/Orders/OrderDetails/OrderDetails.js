import React from "react";
import Zoom from "react-reveal/Zoom";

import classes from "./OrderDetails.module.css";
import Button from "../../UI/Button/Button";

const orderDetails = (props) => {
    let summary = null;
    if (props.order) {
        summary = (
            <Zoom>
                <div className={classes.OrderDetails}>
                    <h2>Your order</h2>
                    <div>
                        <p>Name:</p>
                        <p>{props.order.name}</p>
                    </div>
                    <div>
                        <p>Email:</p>
                        <p>{props.order.email}</p>
                    </div>
                    <div>
                        <p>Address:</p>
                        <p>{props.order.address}</p>
                    </div>
                    <div>
                        <p>Date: </p>
                        <p>{new Date().toUTCString()}</p>
                    </div>
                    <div>
                        <p>Total:</p>
                        <p>${props.totalPrice.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>Order items:</p>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                        }}>
                            {props.order.orderItem.map(item => {
                                return <p
                                    key={item._id}
                                    style={{
                                        fontWeight: "unset",
                                        color: "black",
                                        letterSpacing: "unset",
                                        fontSize: "16px",
                                        marginBottom: "0px"
                                    }}>{item.count}x {item.title}</p>
                            })}
                        </div>

                    </div>
                    <div>
                        <Button
                            btnType="Success"
                            clicked={props.closeModal}>OK</Button>
                    </div>
                </div>
            </Zoom>
        )
    }
    return summary;
}

export default orderDetails;