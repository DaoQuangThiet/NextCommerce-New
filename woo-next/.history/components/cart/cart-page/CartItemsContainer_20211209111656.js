import { useContext } from 'react';
import { removeItemFromCart } from '../../../function';
import { AppContext } from "../../context/AppContext";
import CartItem from './Cartitem';


const CartItemsContainer = () => {
    const [cart, setCart] = useContext(AppContext);
    console.warn(cart);
    const handleRemoveProductClick = (event, id) => {
        const updatedCart = removeItemFromCart(id);

        setCart(updatedCart);
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
                    {/*TOTAL CART- PRICE */}
                    <h2>Cart Total</h2>
                    <div className="row carttotalcontainer mt-5">
                        <div className="col-6">
                            <table className="table table-hover">
                                <tbody>
                                    <tr className="table-light">
                                        <td className="cartelementtoal"> Subtotal</td>
                                        <td className="cartelementamt">{cart.totalProductsPrice}</td>
                                    </tr>
                                    <tr className="table-light">
                                        <td className="cartelementtoal"> Total</td>
                                        <td className="cartelementamt">{cart.totalProductsPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : ''}
        </div>
    )
};

export default CartItemsContainer;