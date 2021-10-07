"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = void 0;
function isEqual(item1, item2) {
    return item1.name === item2.name && item1.price == item2.price;
}
exports.isEqual = isEqual;
function isObject(object) {
    return object != null && typeof object === 'object';
}
