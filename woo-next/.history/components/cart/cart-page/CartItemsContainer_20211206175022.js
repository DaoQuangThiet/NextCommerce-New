import { useContext } from 'react';
import { AppContext } from "../../context/AppContext";
import CartItem from './Cartitem';


const CartItemsContainer = () => {
    const [cart, setCart] = useContext(AppContext);
    console.warn(cart);
    const handleRemoveProductClick = () => {

    };


    return (
        <div>
            {cart ? (
                <div className="woo-next-cart-wrapper container">
                    <h1 className="woo-next-cart-heading mt-5">Cart</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr className="cartheadercontainer">
                                <th className="woo-next-cart-heading" scope="col" />
                                <th className="woo-next-cart-heading" scope="col" />
                                <th className="woo-next-cart-heading" scope="col" >Product</th>
                                <th className="woo-next-cart-heading" scope="col" >Price</th>
                                <th className="woo-next-cart-heading" scope="col" >Quantity</th>
                                <th className="woo-next-cart-heading" scope="col" >Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.length && (
                                cart.products.map(item => (
                                    <CartItem
                                        key={item.productId}
                                        item={item}
                                        handleRemoveProductClick={handleRemoveProductClick}
                                        setCart={setCart}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            ) : ''}
        </div>
    )
};

export default CartItemsContainer;