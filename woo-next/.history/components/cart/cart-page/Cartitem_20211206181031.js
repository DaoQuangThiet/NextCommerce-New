import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
const CartItem = ({ item, setCart, handleRemoveProductClick }) => {

    const [productCount, setProductCount] = useState(item.qty);

    const handleQtyChange = (event) => {
        if (process.browser) {
            const newQty = event.target.value;
            setProductCount(newQty);

            //@TOTO Update the cart
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