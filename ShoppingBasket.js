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
        return this.items;
    }
    ;
    count() {
        return this.items.length;
    } //löschen über positionsnummer(arrayposition +1 ???)
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
    ; // ausgabe mit anzahl(item => a + b ??)
    printPackList() {
        console.table(this.items);
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
function item(newitem, item) {
    throw new Error("Function not implemented.");
}
