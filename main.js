"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Catalog_1 = require("./Catalog");
const ShoppingBasket_1 = require("./ShoppingBasket");
/*================ CATALOG =============================================== */
const catalog1 = new Catalog_1.Catalog();
catalog1.addProduct({ name: "Schraube", price: 0.05 });
catalog1.addProduct({ name: "Nagel", price: 0.15 });
catalog1.addProduct({ name: "Hammer", price: 0.25 });
catalog1.addProduct({ name: "Feile", price: 0.35 });
catalog1.addProduct({ name: "säge", price: 0.45 });
catalog1.addProduct({ name: "Bohrer", price: 0.55 });
/*================== AUSGABE============================================== */
/*console.table(catalog1);
catalog1.updateProduct();
catalog1.deleteProduct("säge")
catalog1.showProduct("Feile")
catalog1.getProductPrice("Feile")
catalog1.hasProduct("Feile")
/*================ ShoppingBasket ======================================== */
const basket1 = new ShoppingBasket_1.ShoppingBasket();
console.table(basket1);
basket1.addItem({ name: "Schraube", price: 0.05 });
basket1.addItem({ name: "Nagel", price: 0.15 });
basket1.addItem({ name: "Hammer", price: 0.25 });
basket1.addItem({ name: "Feile", price: 0.35 });
basket1.addItem({ name: "säge", price: 0.45 });
basket1.addItem({ name: "Schraube", price: 0.05 });
/*================== AUSGABE ============================================= */
console.table(basket1);
//console.log(basket1);
//basket1.deleteItem("");
//basket1.deleteItems();
//basket1.print();
//basket1.sortByName();
//basket1.printPackList()
//basket1.getSum();
catalog1.addProduct({ name: "Bohrer", price: 0.55 });
catalog1.updateProduct();
