"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingBasket = void 0;
class ShoppingBasket {
    constructor() {
        this.items = [];
        return this;
    }
    ;
    addItem(item) {
        if (this.items.length < 10) {
            this.items.push(item);
        }
    }
    ;
    count() {
        return this.items.length;
    }
    deleteItem() {
        const deleted = this.items.splice(/*index, howMany, [element1][, ..., elementN]*/ 2, 0);
    }
    ;
    deleteItems() {
        this.items = [];
        return this.items;
    }
    print() {
        console.table(this.items);
    }
    ;
    sortByName() {
        const sorted = this.items.sort();
        console.table(this.items);
        return this.items;
    }
    ;
    printPackList() {
        console.table(this.items);
    }
    ;
}
exports.ShoppingBasket = ShoppingBasket;
;
