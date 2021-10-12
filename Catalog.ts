import { Item } from "./interface";
import {isEqual } from "./equal";
export class Catalog {
  items:Array<Item> = [];
  caches: any;
  static items: any;
    
  constructor() {
    return this;
  };
  addProduct(newitem: Item): void {
    const found = this.items.some(item => {
      return isEqual(newitem,item)
    } )
    if(!found){
      this.items.push(newitem);
    }  else {
      console.log("Das Produkt ist schon vorhanden!");
    }
  };

    updateProduct(name:string,newname:string,newprice:number): void {
      const objIndex = this.items.findIndex((item => name == item.name));
      this.items[objIndex].name = newname
      this.items[objIndex].price = newprice
    
    };
  deleteProduct(name:string): void {
    const dontExists:boolean = (!this.items.some(item => name === item.name))
    if(dontExists){
      console.log("Produkt ist nicht vorhanden!")
    } else {
    this.items = this.items.filter(item => item.name !== name);
    console.log(name + " removed")
    }
   };
  showProduct(name:string): void {
       const item = this.items.find(item => item.name == name);
       console.log(item?.name + " Preis: " + item?.price.toFixed(2) + "€")
      
    };
  getProductPrice(name:string):void {
    const item = this.items.find(item => item.name === name);
    console.log( " Preis: " + item?.price.toFixed(2) + "€")
    };
  hasProduct(name:string): void {
    const item2 = this.items.find(item => item.name == name);
    if(this.items.find(item => item.name == name)) {
    console.log( " ja: Produkt: " + item2?.name + " Preis: " + item2?.price.toFixed(2) + "€")
    }
    else {
      console.log( " Produkt: " + name + " nicht vorhanden")
    }
    };  
};




   
