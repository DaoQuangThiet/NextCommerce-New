import CloseIcon from '@mui/icons-material/Close';
const CartItem = ({ item, setCart, handleRemoveProductClick }) => {
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
                {item.price}
            </td>
        </tr>
    )
};

export default CartItem;