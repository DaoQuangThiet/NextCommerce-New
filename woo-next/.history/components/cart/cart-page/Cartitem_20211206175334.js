import CloseIcon from '@mui/icons-material/Close';
const CartItem = ({ item, setCart, handleRemoveProductClick }) => {
    return (
        <tr className="cartitem" key={item.productId}>
            <th className="cartelement">
                <span className="cartcloseicon" onClick={(event) => handleRemoveProductClick(event)}>
                    <CloseIcon />
                </span>
            </th>
            <td className="cartelement">
                <img width="63" src={item.image.sourceURL} srcSet={item.image.srcSet} alt={item.image.title} />
            </td>
        </tr>
    )
};

export default CartItem;