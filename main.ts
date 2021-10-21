import { Catalog } from "./Klassen/Catalog";
import { Item } from "./Interface/item";
import { ShoppingBasket } from "./Klassen/ShoppingBasket";
import { RealItem } from './Interface/realItem';


/*================ CATALOG =============================================== */
const catalog1 = new Catalog();
const schraube = new RealItem("Schraube", 0.05)
const nagel    = new RealItem("Nagel",    0.15);
const hammer   = new RealItem("Hammer",   0.25);
const feile    = new RealItem("Feile",    0.35);
const säge     = new RealItem("säge",     0.45);
const bohrer   = new RealItem("Bohrer",   0.55);
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
const basket1 = new ShoppingBasket();
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
