"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areItemIsEqual = void 0;
function areItemIsEqual(item1, item2) {
    return item1.name === item2.name && item1.price == item2.price;
}
exports.areItemIsEqual = areItemIsEqual;
function isObject(object) {
    return object != null && typeof object === 'object';
}
