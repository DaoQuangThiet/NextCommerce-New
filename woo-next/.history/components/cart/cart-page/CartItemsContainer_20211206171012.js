import { useContext } from 'react';
import { AppContext } from "../../context/AppContext";
import CartItem from './Cartitem';


const CartItemsContainer = () => {
    const [cart, setCart] = useContext(AppContext);
    console.warn(setCart);


    return (
        <div>
            {cart ? (
                <div className="cartwrapper container">
                    <h1 className="cartheading mt-5">Cart</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr className="cartheadercontainer">
                                <th className="nextcartheading" scope="col" />
                                <th className="nextcartheading" scope="col" />
                                <th className="nextcartheading" scope="col" >Product</th>
                                <th className="nextcartheading" scope="col" >Price</th>
                                <th className="nextcartheading" scope="col" >Quantity</th>
                                <th className="nextcartheading" scope="col" >Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.length && (
                                cart.products.map(item => (
                                    <CartItem
                                        key={item.productId}
                                        item={item}
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