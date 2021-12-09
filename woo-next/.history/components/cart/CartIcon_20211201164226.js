import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles({
    carticonspan: {
        position: 'relative',
        fontSize: '25px',
    },
    containercart: {
        cursor: 'pointer',
        paddingRight: '16px',
    },

});

const CartIcon = () => {

    const classes = useStyles();
    const [cart, setCart] = useContext(AppContext);
    const productsCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductsCount : '';
    const totalPrice = (null !== cart && Object.keys(cart).length) ? cart.totalProductsPrice : '';

    return (
        <React.Fragment>
            <Link href="/cart" >
                <a>
                    <div className={classes.containercart}>
                        {totalPrice ? <span>${totalPrice.toFixed(2)}</span> : ''}
                        <span className={classes.carticonspan}>
                            <ShoppingCartIcon />
                            {productsCount ? <span className="woo-next-cart-count">{productsCount}</span> : ''}
                        </span>
                    </div>
                </a>
            </Link>
        </React.Fragment>
    )
};

export default CartIcon;