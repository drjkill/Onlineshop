import { Item } from "./interface";
import {isEqual } from "./equal";

export class ShoppingBasket {
  items: Array<Item> = [];
  constructor() {  
    return this;
  };
  
  addItem(newitem: Item): Item {
    this.items.push(newitem);
    return newitem   
  }
  deleteItem(name: string): void {
    const dontExists: boolean = (!this.items.some(item => name == item.name))
    if (dontExists) {
      console.log("Produkt ist nicht vorhanden!")
    } else {
      this.items = this.items.filter(item => item.name !== name);
      console.log(name + " removed")
    }
  };
  deleteItems(): Item[] {
    this.items = [];
    return this.items;
  }
  print(): void {
    console.table(this.items);
  };
  sortByName(): Item[] {
    const sorted = this.items.sort((a, b) => a.name < b.name ? -1 : 1);
    console.table(this.items);
    return sorted;
  };
  printPackList() {
    const names :any[] = this.items.map(item => item.name );
    const menge = [];
    const newArray: any[] = this.items.map(item => item.name );
     for (let i = 0; i < this.items.length ; i++)
     newArray[i] = [ this.items[i] , menge[names[i]] = names.filter(x => x == names[i]).length ];
     const result = [...new Set(newArray.map(a => JSON.stringify(a)))].map(a => JSON.parse(a))
     return result
};     
  getSum(): void {
    let sum = this.items.map(a => a.price).reduce(function (a, b) {
      return a + b;
    });
    console.log("                  Summe: " + sum.toFixed(2) + "€");
  };

};
