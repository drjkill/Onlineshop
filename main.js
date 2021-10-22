"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Catalog_1 = require("./Klassen/Catalog");
const ShoppingBasket_1 = require("./Klassen/ShoppingBasket");
const realItem_1 = require("./Klassen/realItem");
/*================ CATALOG =============================================== */
const catalog1 = new Catalog_1.Catalog();
const schraube = new realItem_1.RealItem("Schraube", 0.05);
const nagel = new realItem_1.RealItem("Nagel", 0.15);
const hammer = new realItem_1.RealItem("Hammer", 0.25);
const feile = new realItem_1.RealItem("Feile", 0.35);
const säge = new realItem_1.RealItem("säge", 0.45);
const bohrer = new realItem_1.RealItem("Bohrer", 0.55);
catalog1.addProduct(schraube);
catalog1.addProduct(nagel);
catalog1.addProduct(hammer);
catalog1.addProduct(feile);
catalog1.addProduct(säge);
catalog1.addProduct(bohrer);
catalog1.addProduct(schraube);
/*================== AUSGABE==============================================
console.table(catalog1);
catalog1.updateProduct("Feile","Lüfter",4.90);
console.table(catalog1);
catalog1.deleteProduct("säge")
catalog1.showProduct("Lüfter")
catalog1.getProductPrice("Lüfter")
catalog1.hasProduct("Feile")*/
/*================ ShoppingBasket ======================================== */
const basket1 = new ShoppingBasket_1.ShoppingBasket();
basket1.addItem(schraube);
basket1.addItem(bohrer);
basket1.addItem(nagel);
basket1.addItem(hammer);
basket1.addItem(nagel);
basket1.addItem(hammer);
basket1.addItem(nagel);
basket1.addItem(bohrer);
/*================== AUSGABE ============================================= */
console.table(basket1);
basket1.deleteItem("auto");
console.table(basket1.print());
console.table(basket1.sortByName());
console.log("Packliste: ");
console.table(basket1.printPackList2());
basket1.getSum();
