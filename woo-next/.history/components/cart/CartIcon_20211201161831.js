import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    Woonextcarticoncontainer: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

const CartIcon = () => {

    const [cart, setCart] = useContext(AppContext);
    const productsCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductsCount : '';
    const totalPrice = (null !== cart && Object.keys(cart).length) ? cart.totalProductsPrice : '';

    return (
        <React.Fragment>
            <Link href="/cart" >
                <a>
                    <div className="woo-next-cart-wrap">
                        {totalPrice ? <span>${totalPrice.toFixed(2)}</span> : ''}
                        <span className="Woonextcarticoncontainer">
                            <i className="fa fa-shopping-cart woo-next-cart-icon" />
                            {productsCount ? <span className="woo-next-cart-count">{productsCount}</span> : ''}
                        </span>
                    </div>
                </a>
            </Link>
        </React.Fragment>
    )
};

export default CartIcon;