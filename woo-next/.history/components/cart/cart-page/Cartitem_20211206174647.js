import CloseIcon from '@mui/icons-material/Close';
const CartItem = ({ item, setCart }) => {
    return (
        <tr className="cartitem" key={item.productId}>
            <th className="cartelement">
                <span className="cartcloseicon">
                    <CloseIcon />
                </span>
            </th>
        </tr>
    )
};

export default CartItem;