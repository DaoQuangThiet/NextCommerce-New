import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { updateCart } from "../../../function";

const CartItem = ({ item, setCart, handleRemoveProductClick }) => {

    const [productCount, setProductCount] = useState(item.qty);


    const handleQtyChange = (event) => {
        if (process.browser) {
            const newQty = event.target.value;
            setProductCount(newQty);


            // LAY DU LIEU TU LOCALSTORAGE
            let existingCart = localStorage.getItem('woo-next-cart');
            existingCart = JSON.parse(existingCart);
            //@TOTO Update the cart
            const updatedCart = updateCart(existingCart, item, false, newQty);
            setCart(updatedCart);
        }

    };


    return (
        <tr className="cartitem" key={item.productId}>
            {/*Icon close */}
            <th className="cartelement">
                <span className="cartcloseicon" onClick={(event) => handleRemoveProductClick(event)}>
                    <CloseIcon />
                </span>
            </th>
            {/* image */}
            <td className="cartelement">
                <img width="63" src={item.image} />
            </td>
            {/* image */}
            <td className="cartelement">
                {item.name}
            </td>
            {/* PRICE */}
            <td className="cartelement">
                {'$ ' + item.price}
            </td>
            {/* QUANTITY */}
            <td className="cartelement">
                <input
                    type="number"
                    min="1"
                    className="cartqtyinput"
                    value={productCount}
                    onChange={handleQtyChange}
                />
            </td>
            {/* Total */}
            <td className="cartelement">
                {item.totalPrice.toFixed(2)}
            </td>
        </tr>
    )
};

export default CartItem;