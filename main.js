"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Catalog_1 = require("./Catalog");
const ShoppingBasket_1 = require("./ShoppingBasket");
/*================ CATALOG =============================================== */
const catalog1 = new Catalog_1.Catalog();
const schraube = ({ name: "Schraube", price: 0.05 });
const nagel = ({ name: "Nagel", price: 0.15 });
const hammer = ({ name: "Hammer", price: 0.25 });
const feile = ({ name: "Feile", price: 0.35 });
const säge = ({ name: "säge", price: 0.45 });
const bohrer = ({ name: "Bohrer", price: 0.55 });
catalog1.addProduct(schraube);
catalog1.addProduct(nagel);
catalog1.addProduct(hammer);
catalog1.addProduct(feile);
catalog1.addProduct(säge);
catalog1.addProduct(bohrer);
catalog1.addProduct(schraube);
/*================== AUSGABE============================================== */
console.table(catalog1);
catalog1.updateProduct("Feile", "Lüfter", 4.90);
console.table(catalog1);
catalog1.deleteProduct("säge");
catalog1.showProduct("Lüfter");
catalog1.getProductPrice("Lüfter");
catalog1.hasProduct("Feile");
/*================ ShoppingBasket ======================================== */
const basket1 = new ShoppingBasket_1.ShoppingBasket();
console.table(basket1);
basket1.addItem(schraube);
basket1.addItem(schraube);
basket1.addItem(bohrer);
basket1.addItem(nagel);
basket1.addItem(nagel);
basket1.addItem(hammer);
/*================== AUSGABE ============================================= */
console.table(basket1);
basket1.deleteItem("Nagel");
console.table(basket1);
//basket1.deleteItems();
basket1.print();
basket1.sortByName();
basket1.printPackList();
basket1.getSum();
