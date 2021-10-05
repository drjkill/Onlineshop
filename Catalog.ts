import { Item } from "./interface";

export class Catalog {
  items:Array<Item> = [];
    
  constructor() {
    return this;
  };
  addProduct(item: Item) {
      if (this.items.length < 10) {
        this.items.push(item);
      }
    };
  count() {
      return this.items.length;
    }
  updateProduct(){
    return this.items
    };
  deleteProduct(){
    const deleted = this.items.splice(/*index, howMany, [element1][, ..., elementN]*/2,0,);
    };
  showProduct(){
      console.table(this.items);
    };
  getProductPrice(){

    };
  hasProduct(){

    };  
};
