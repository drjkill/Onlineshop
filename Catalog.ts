import { Item } from "./interface";
import {isEqual } from "./equal";
export class Catalog {
  items:Array<Item> = [];
    
  constructor() {
    return this;
  };//  + Fehler wenn produkt vorhanden
  addProduct(newitem: Item) {
    const found = this.items.some(item => {
      return isEqual(newitem,item)
    } )
    if(!found){
      this.items.push(newitem);
    }  else {
      console.log("Das Produkt ist schon vorhanden!");
    }
  };
/**3 Parameter !!! index, name, price */
  updateProduct(){
    this.items[1].name = "test";
    this.items[1].price = 0.18;
    return this.items

    };
  deleteProduct(name:string){
    const dontExists:boolean = (this.items.some(item => item.name === item.name))
    if(dontExists){
      console.log("Produkt ist nicht vorhanden!")
    } else {
    this.items = this.items.filter(item => item.name !== name);
    console.log(name + " removed")
    }
   };
  showProduct(name:string){
       const item = this.items.find(item => item.name == name);
       console.log(item?.name + " Preis: " + item?.price + "€")
      
    };
  getProductPrice(name:string){
    const item = this.items.find(item => item.name === name);
    console.log( " Preis: " + item?.price + "€")
    };
  hasProduct(name:string){
    const item2 = this.items.find(item => item.name == name);
    if(this.items.find(item => item.name == name)) {
    console.log( " ja: Produkt: " + item2?.name + " Preis: " + item2?.price + "€")
    }
    else {
      console.log( " Produkt: " + name + " nicht vorhanden")
    }
    };  
};




   
