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
}