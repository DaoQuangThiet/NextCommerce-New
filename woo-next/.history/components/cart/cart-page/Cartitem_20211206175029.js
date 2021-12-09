import CloseIcon from '@mui/icons-material/Close';
const CartItem = ({ item, setCart, handleRemoveProductClick }) => {
    return (
        <tr className="cartitem" key={item.productId}>
            <th className="cartelement">
                <span className="cartcloseicon" onClick={(event) => handleRemoveProductClick(event)}>
                    <CloseIcon />
                </span>
            </th>
        </tr>
    )
};

export default CartItem;