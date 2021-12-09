const CartItem = ({ item, setCart }) => {
    return (
        <tr className="cartitem" key={item.productId}>
            <th className="cartelement">
                <span className="cartcloseicon">
                    <i className="da fa-times-circle"></i>
                </span>
            </th>
        </tr>
    )
};

export default CartItem;