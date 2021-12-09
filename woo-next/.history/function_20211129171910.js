export const getFloatVal = () => {
    var floatValue = new RegExp("/[+-]?\d+(\.\d+)?/g");
    console.warn('floatval', floatValue);
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
};

export const addFirstProduct = (product) => {
    let productPrice = getFloatVal(product.price);
};