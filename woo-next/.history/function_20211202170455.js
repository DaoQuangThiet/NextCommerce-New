export const getFloatVal = (string) => {
    string = string.toString();
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
    //console.warn('floatval', floatValue);
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
};

export const addFirstProduct = (product) => {
    let productPrice = getFloatVal(product.price);
    // RUN OK: console.warn(parseFloat(productPrice.toFixed(2)));
    //console.warn( productPrice, typeof productPrice);

    // Create an empty array and push the item
    let newCart = {
        products: [],
        totalProductsCount: 1,
        totalProductsPrice: productPrice
    }

    const newProduct = createNewProduct(product, productPrice, 1);
    newCart.products.push(newProduct);

    localStorage.setItem('woo-next-cart ', JSON.stringify(newCart));
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
        productId: product.id,
        image: product.images[0].src,
        name: product.name,
        price: productPrice,
        qty: qty,
        totalPrice: parseFloat((productPrice * qty).toFixed(2))
    }
};
// xu lys khi nguoi dung add to cart 2 san pham sex duoc cong don vaof cart
export const updateCart = (existingCart, product, qtyToBeAdded, newQty = false) => {
    const updateProducts = getUpdateProducts(existingCart.products, product, qtyToBeAdded, newQty);
};

export const getUpdateProducts = (existingProductsInCart, product, qtyToBeAdded, newQty = false) => {
    const productExitsIndex = isProductInCart(existingProductsInCart, product.id);

    // if product exits)index of the product is found in the array), update the product quantity and tatalPrice

    if (-1 < productExitsIndex) {
        let updateProducts = existingProductsInCart;
        let updateProduct = updateProducts[productExitsIndex];

        updateProduct.qty = (newQty) ? parseInt(newQty) : parseInt(updateProduct.qty + qtyToBeAdded);
        //update proce on cart
        updateProduct.totalPrice = parseFloat(updateProduct.price * updateProduct.qty).toFixed(2);

        return updateProduct;
    } else {
        //if product not found push the new product to the existing products array
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
export const isProductInCart = (existingProductsInCart, id) => {

    const returnItemThatExits = (item, index) => {
        if (id === item.id) {
            return itemm;
        }
    };
    const newArray = existingProductsInCart.filter(returnItemThatExits);

    return existingProductsInCart.indexOf(newArray[0]);
};