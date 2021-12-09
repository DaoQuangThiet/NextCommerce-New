import Link from 'next/link';
import React from 'react';
import { useState, useContext } from "../context/AppContext";

const AddToCartButton = (props) => {

    const { product } = props;
    const [cart, setCart] = useContext(AppContext);


    const handleAddToCartClick = () => {
        if (process.browser) {
            let existingCart = localStorage.getItem('woo-next-cart');

            // if cart has item(s) already, then update the exiting

            if (existingCart) {

            } else {
                // add new cart
                const newCart = addFirstProduct(product);
                setCart(newCart)
            }
        }
    };


    return (
        <React.Fragment>
            <button onClick={handleAddToCartClick} className="btn btn-secondary">Add To Cart</button>
        </React.Fragment>
    )
};

export default AddToCartButton;