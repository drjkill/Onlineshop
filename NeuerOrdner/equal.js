export function areItemIsEqual(item1, item2) {
    return item1.name === item2.name && item1.price == item2.price;
}
function isObject(object) {
    return object != null && typeof object === 'object';
}
