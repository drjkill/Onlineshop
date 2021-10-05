"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog = void 0;
class Catalog {
    constructor() {
        this.items = [];
        return this;
    }
    ;
    addProduct(item) {
        if (this.items.length < 10) {
            this.items.push(item);
        }
    }
    ;
    count() {
        return this.items.length;
    }
    updateProduct() {
        return this.items;
    }
    ;
    deleteProduct() {
        const deleted = this.items.splice(/*index, howMany, [element1][, ..., elementN]*/ 2, 0);
    }
    ;
    showProduct() {
        console.table(this.items);
    }
    ;
    getProductPrice() {
    }
    ;
    hasProduct() {
    }
    ;
}
exports.Catalog = Catalog;
;
