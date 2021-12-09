import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles({
    carticon: {
        position: 'relative',

    },
    containercart: {
        cursor: 'pointer',
        paddingRight: '16px',
        color: '#fff',
    },
    cartcount: {
        top: '-8px',
        left: '12px',
        paddingLeft: ' 5px',
        fontSize: '15px',
        padding: '0 5px 3px 0',
        lineHeight: '16px',
        color: '#fff',
        minHeight: '16px',
        fontWeight: '700',
        borderRadius: '50%',
        backgroundColor: '#868484',
        position: 'absolute',
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
                        <span className={classes.carticon}>

                            {productsCount ? <span className={classes.cartcount}>{productsCount}</span> : ''}
                        </span>
                        <ShoppingCartIcon />
                    </div>
                </a>
            </Link>
        </React.Fragment>
    )
};

export default CartIcon;