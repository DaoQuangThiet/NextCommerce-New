import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';

const useStyles = makeStyles({
    aaaaaaaaaa: {
        background: 'red',
        fontsize: '35px',
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
                        <span className="aaaaaaaaaa">
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