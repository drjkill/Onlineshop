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
        this.items.push(item);
        return this.items;
    }
    ;
    /**3 Parameter !!! index, name, price */
    updateProduct(name) {
        /*this.items[1].name = "";
        this.items[1].price = 0.18;
        return this.items*/
    }
    ;
    deleteProduct(name) {
        this.items = this.items.filter(item => item.name !== name);
        console.log(name + " removed");
    }
    ;
    showProduct(name) {
        const item = this.items.find(item => item.name == name);
        console.log(item?.name + " Preis: " + item?.price + "€");
    }
    ;
    getProductPrice(name) {
        const item = this.items.find(item => item.name == name);
        console.log(" Preis: " + item?.price + "€");
    }
    ;
    hasProduct(name) {
        const item2 = this.items.find(item => item.name == name);
        if (this.items.find(item => item.name == name)) {
            console.log(" ja: Produkt:" + item2?.name + " Preis: " + item2?.price + "€");
        }
        else {
            console.log(" Produkt: " + name + " nicht vorhanden");
        }
    }
    ;
}
exports.Catalog = Catalog;
;
