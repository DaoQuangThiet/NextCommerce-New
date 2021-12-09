export const getFloatVal = (string) => {
    string = string.toString();
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
    //console.warn('floatval', floatValue);
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
};

export const addFirstProduct = (product) => {
    let productPrice = getFloatVal(product.price);
    console.warn(parseFloat(productPrice.toFixed(2)));
    //console.warn( productPrice, typeof productPrice);

    // Create an empty array and push the item
    let newCart = {
        products: [],
        totalProductsCount: 1,
        totalProductsPrice: parseFloat(productPrice.toFixed(2))
    }
};