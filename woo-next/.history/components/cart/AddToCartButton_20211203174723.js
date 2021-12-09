import Link from 'next/link';
import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { addFirstProduct, updateCart } from '../../function';

const AddToCartButton = (props) => {

    const { product } = props;
    const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowCart] = useState(false);


    const handleAddToCartClick = () => {
        if (process.browser) {
            let existingCart = localStorage.getItem('woo-next-cart');

            // if cart has item(s) already, then update the exiting

            if (existingCart) {
                existingCart = JSON.parse(existingCart);

                const qtyToBeAdded = 1;

                const updatedCart = updateCart(existingCart, product, qtyToBeAdded);
                setCart(updatedCart);

            } else {
                // add new cart
                const newCart = addFirstProduct(product);
                setCart(newCart);
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