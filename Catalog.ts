import { Item } from "./interface";

export class Catalog {
  items:Array<Item> = [];
    
  constructor() {
    return this;
  };
  addProduct(item: Item) {
    this.items.push(item);
    return this.items     
  };
/**3 Parameter !!! index, name, price */
  updateProduct(name: string){
    /*this.items[1].name = "";
    this.items[1].price = 0.18;
    return this.items*/

    };
  deleteProduct(name:string){
     this.items = this.items.filter(item => item.name !== name);
     console.log(name + " removed")
    };
  showProduct(name:string){
       const item = this.items.find(item => item.name == name);
      console.log(item?.name + " Preis: " + item?.price + "€")
    };
  getProductPrice(name:string){
    const item = this.items.find(item => item.name == name);
    console.log( " Preis: " + item?.price + "€")
    };
  hasProduct(name:string){
    const item2 = this.items.find(item => item.name == name);
    if(this.items.find(item => item.name == name)) {
    console.log( " ja: Produkt:" + item2?.name + " Preis: " + item2?.price + "€")
    }
    else {
      console.log( " Produkt: " + name + " nicht vorhanden")
    }
    };  
};
