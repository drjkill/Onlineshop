import { Catalog } from "./Catalog";
import { Item } from "./interface";
import { ShoppingBasket } from "./ShoppingBasket";


/*================ CATALOG =============================================== */
const catalog1 = new Catalog();
const schraube = { name: "Schraube", price: 0.05 };
const nagel    = { name: "Nagel",    price: 0.15 };
const hammer   = { name: "Hammer",   price: 0.25 };
const feile    = { name: "Feile",    price: 0.35 };
const säge     = { name: "säge",     price: 0.45 };
const bohrer   = { name: "Bohrer",   price: 0.55 };
catalog1.addProduct(schraube)
catalog1.addProduct(nagel)
catalog1.addProduct(hammer)
catalog1.addProduct(feile)
catalog1.addProduct(säge)
catalog1.addProduct(bohrer)
catalog1.addProduct(schraube)

/*================== AUSGABE============================================== 
console.table(catalog1);
catalog1.updateProduct("Feile","Lüfter",4.90);
console.table(catalog1);
catalog1.deleteProduct("säge")
catalog1.showProduct("Lüfter")
catalog1.getProductPrice("Lüfter")
catalog1.hasProduct("Feile")*/

/*================ ShoppingBasket ======================================== */
const basket1  = new ShoppingBasket();
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
basket1.deleteItem("auto")
console.table(basket1.print());
console.table(basket1.sortByName());
console.log("Packliste: ");
console.table(basket1.printPackList2());
basket1.getSum();
