import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';


const CartItemsContainer = () => {
    const [cart, setCart] = useContext(AppContext);
    console.warn(cart);


    return (
        <div>
            fdsds
        </div>
    )
};

export default CartItemsContainer;