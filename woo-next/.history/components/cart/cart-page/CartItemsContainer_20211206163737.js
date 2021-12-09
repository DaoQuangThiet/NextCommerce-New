import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CartItem from './Cartitem';


const CartItemsContainer = () => {
    const [cart, setCart] = useContext(AppContext);
    console.warn(cart);


    return (
        <div>
            adadsdsad
        </div>
    )
};

export default CartItemsContainer;