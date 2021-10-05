import { Item } from "./interface"; 

  export class ShoppingBasket {
    items:Array<Item> = [];
  
    constructor() {
      return this;
    };
  
    addItem(item: Item) {
      this.items.push(item);
      return this.items
      };
    count() {
      return this.items.length;
    }
    deleteItem(name:string){
      this.items = this.items.filter(item => item.name !== name);
      console.log(name + " removed")
     };
    deleteItems() {
      this.items = [];
      return this.items;
    }
    print(){
      console.table(this.items);
    };
    sortByName(){
      const sorted = this.items.sort();
      console.table(this.items);
      return sorted;
    };
    printPackList(){
      console.table(this.items);
    };   
  
  };