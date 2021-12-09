export const getFloatVal = (string) => {
    string = string.toString();
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';

};

export const addFirstProduct = (product) => {

    let productPrice = getFloatVal(product.price);

    let newCart = {
        products: [],
        totalProductsCount: 1,
        totalProductsPrice: productPrice
    };

    const newProduct = createNewProduct(product, productPrice, 1);
    newCart.products.push(newProduct);

    localStorage.setItem('woo-next-cart', JSON.stringify(newCart));

    return newCart;
};

/**
 * Create a new product object
 * 
 * @param {*} product 
 * @param {*} productPrice 
 * @param {*} qty 
 * @returns 
 */
export const createNewProduct = (product, productPrice, qty) => {

    return {
        productId: product.productId,
        image: product.image,
        name: product.name,
        price: productPrice,
        qty,
        totalPrice: parseFloat((productPrice * qty).toFixed(2))
    };

};
// xu lys khi nguoi dung add to cart 2 san pham sex duoc cong don vaof cart
export const updateCart = (existingCart, product, qtyToBeAdded, newQty = false) => {

    const updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded, newQty);

    const addPrice = (total, item) => {
        total.totalPrice += item.totalPrice;
        total.qty += item.qty;

        return total;
    };

    // Loop through the updated product array and add the totalPrice of each item to get the totalPrice
    let total = updatedProducts.reduce(addPrice, { totalPrice: 0, qty: 0 });

    const updatedCart = {
        products: updatedProducts,
        totalProductsCount: parseInt(total.qty),
        totalProductsPrice: parseFloat(total.totalPrice)
    };

    localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

    return updatedCart;
};


/**
 * get update products array
 * update the product if its exits
 * and add the new product to existing cart
 * 
 * @param {*} existingProductsInCart 
 * @param {*} product 
 * @param {*} qtyToBeAdded 
 * @param {*} newQty 
 * @returns 
 */
export const getUpdatedProducts = (existingProductsInCart, product, qtyToBeAdded, newQty = false) => {

    // Check if the product already exits in the cart.
    const productExitsIndex = isProductInCart(existingProductsInCart, product.productId);

    // If product exits ( index of that product found in the array ), update the product quantity and totalPrice
    if (-1 < productExitsIndex) {
        let updatedProducts = existingProductsInCart;
        let updatedProduct = updatedProducts[productExitsIndex];

        // If have new qty of the product available, set that else add the qtyToBeAdded
        updatedProduct.qty = (newQty) ? parseInt(newQty) : parseInt(updatedProduct.qty + qtyToBeAdded);
        updatedProduct.totalPrice = parseFloat((updatedProduct.price * updatedProduct.qty).toFixed(2));

        return updatedProducts;
    } else {

        // If product not found push the new product to the existing product array.
        let productPrice = getFloatVal(product.price);
        const newProduct = createNewProduct(product, productPrice, qtyToBeAdded);
        existingProductsInCart.push(newProduct);

        return existingProductsInCart;
    }
};



/**
 * return index of the product if it exits
 * @param {*} existingProductsInCart 
 * @param {*} id 
 * @returns 
 */
const isProductInCart = (existingProductsInCart, productId) => {

    const returnItemThatExits = (item, index) => {
        if (productId === item.productId) {
            return item;
        }
    };

    // This new array will only contain the product which is matched.
    const newArray = existingProductsInCart.filter(returnItemThatExits);

    return existingProductsInCart.indexOf(newArray[0]);
};