export const getFloatVal = () => {
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
    console.warn('floatval', floatValue);
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
};

export const addFirstProduct = (product) => {
    let productPrice = getFloatVal(product.price);
};