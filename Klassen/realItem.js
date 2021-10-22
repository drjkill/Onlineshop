"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
exports.RealItem = void 0;
class RealItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    isEqual(item) {
        return item.name === this.name && item.price == this.price;
    }
    ;
}
exports.RealItem = RealItem;
