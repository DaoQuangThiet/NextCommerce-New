import Link from 'next/link';
import React from 'react';
import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { addFirstProduct, updateCart } from '../../function';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    btnviewcart: {
        margin: '25px',
    },
});


const AddToCartButton = (props) => {

    const classes = useStyles();
    const { product } = props;
    const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowViewCart] = useState(false);


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
            setShowViewCart(true);
        }
    };


    return (
        <React.Fragment>
            <Button variant="contained" onClick={handleAddToCartClick} >Add To Cart</Button>
            {showViewCart ? (
                <Link href="/cart">
                    <Button variant="contained" className={classes.btnviewcart}>View Cart</Button>
                </Link>
            ) : ''}
        </React.Fragment>
    )
};

export default AddToCartButton;