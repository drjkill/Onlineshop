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
        this.items.push(item);
        return this.items;
    }
    ;
    count() {
        return this.items.length;
    }
    deleteItem(name) {
        this.items = this.items.filter(item => item.name !== name);
        console.log(name + " removed");
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
        return sorted;
    }
    ;
    printPackList() {
        console.table(this.items);
    }
    ;
}
exports.ShoppingBasket = ShoppingBasket;
;
