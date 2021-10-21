"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog = void 0;
const equal_1 = require("./equal");
class Catalog {
    constructor() {
        this.items = [];
        return this;
    }
    ;
    addProduct(newitem) {
        const found = this.items.some(item => {
            return (0, equal_1.isEqual)(newitem, item);
        });
        if (!found) {
            this.items.push(newitem);
        }
        else {
            console.log("Das Produkt ist schon vorhanden!");
        }
    }
    ;
    updateProduct(name, newname, newprice) {
        const objIndex = this.items.findIndex((item => name == item.name));
        this.items[objIndex].name = newname;
        this.items[objIndex].price = newprice;
    }
    ;
    deleteProduct(name) {
        const dontExists = (!this.items.some(item => name === item.name));
        if (dontExists) {
            console.log("Produkt ist nicht vorhanden!");
        }
        else {
            this.items = this.items.filter(item => item.name !== name);
            console.log(name + " removed");
        }
    }
    ;
    showProduct(name) {
        const item = this.items.find(item => item.name == name);
        console.log(item?.name + " Preis: " + item?.price.toFixed(2) + "€");
    }
    ;
    getProductPrice(name) {
        const item = this.items.find(item => item.name === name);
        console.log(" Preis: " + item?.price.toFixed(2) + "€");
    }
    ;
    hasProduct(name) {
        const item2 = this.items.find(item => item.name == name);
        if (this.items.find(item => item.name == name)) {
            console.log(" ja: Produkt: " + item2?.name + " Preis: " + item2?.price.toFixed(2) + "€");
        }
        else {
            console.log(" Produkt: " + name + " nicht vorhanden");
        }
    }
    ;
}
exports.Catalog = Catalog;
;
