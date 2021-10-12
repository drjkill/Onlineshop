"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingBasket = void 0;
class ShoppingBasket {
    constructor() {
        this.items = [];
        return this;
    }
    ;
    addItem(newitem) {
        this.items.push(newitem);
        return newitem;
    }
    deleteItem(name) {
        const dontExists = (!this.items.some(item => name == item.name));
        if (dontExists) {
            console.log("Produkt ist nicht vorhanden!");
        }
        else {
            this.items = this.items.filter(item => item.name !== name);
            console.log(name + " removed");
        }
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
        const sorted = this.items.sort((a, b) => a.name < b.name ? -1 : 1);
        console.table(this.items);
        return sorted;
    }
    ;
    printPackList() {
        const names = this.items.map(item => item.name);
        const menge = [];
        const newArray = this.items.map(item => item.name);
        for (let i = 0; i < this.items.length; i++)
            newArray[i] = [this.items[i], menge[names[i]] = names.filter(x => x == names[i]).length];
        const result = [...new Set(newArray.map(a => JSON.stringify(a)))].map(a => JSON.parse(a));
        return result;
    }
    ;
    getSum() {
        let sum = this.items.map(a => a.price).reduce(function (a, b) {
            return a + b;
        });
        console.log("                  Summe: " + sum.toFixed(2) + "€");
    }
    ;
}
exports.ShoppingBasket = ShoppingBasket;
;
