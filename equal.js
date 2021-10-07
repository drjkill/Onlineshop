"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = void 0;
function isEqual(i1, i2) {
    return i1.name === i2.name && i1.price == i2.price;
}
exports.isEqual = isEqual;
function isObject(object) {
    return object != null && typeof object === 'object';
}
