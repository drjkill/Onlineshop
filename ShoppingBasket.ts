
import { Item, ItemWithQuantity } from './interface';
import { isEqual } from "./equal";

export class ShoppingBasket {
  items: Array<Item> = [];
  constructor() {
    return this;
  };

  addItem(newitem: Item): Item {
    this.items.push(newitem);
    return newitem
  }
  count() {
    for (let i = 0; i <= this.items.length; i++) {
      const posnr = i + 1
      console.log(posnr)
      return posnr
    };
  };
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
    return sorted;
  };
  printPackList() {  // funktionale Lösung
    const packlist = this.items.filter((value, index, array) => array.findIndex(t => (t.name === value.name)) == index)
    const packlistWithQuantity: ItemWithQuantity[] = packlist.map(item => {
     const newItemWithQuantity: ItemWithQuantity = {                                         // Neues Objekt
        item: item,
        quantity: this.items.filter(element => element.name == item.name).length
      }
      return newItemWithQuantity
    })
    return packlistWithQuantity
  };
  printPackList2() {  // prozeduale Lösung
    const packList: ItemWithQuantity[] = []
    const newItemWithQuantity: ItemWithQuantity = { quantity: 1, item: this.items[0]  }
    packList.push(newItemWithQuantity)

    for (let i = 1; i < this.items.length; i++) {
      let found:boolean = false
      let position:number = -1
      for (let p = 0; p < packList.length; p++) {

        if (packList[p].item == this.items[i]) {
          found = true // gefunden
          position = p //an position p(0-n) 
        }         
      }
      if (found){
        packList[position].quantity++        
      }else {
        const newItemWithQuantity: ItemWithQuantity = { quantity: 1, item: this.items[i]  }
        packList.push(newItemWithQuantity)
      }
    };return packList
  }
  getSum(): void {
    let sum = this.items.map(item => item.price).reduce(function (item, nextItem) {
      return item + nextItem;
    });
    console.log("                                          Summe: " + sum.toFixed(2) + "€");
  };

};
/* so nicht!!!
const names :any[] = this.items.map(item => item.name );// names[] sortiert items nach name
    const menge = [];
    const newArray: any[] = this.items.map(item => item.name );//new array aus names[] und menge[]
     for (let i = 0; i < this.items.length ; i++)
     newArray[i] = [ this.items[i] , menge[names[i]] = names.filter(x => x == names[i]).length ];
     const result = [...new Set(newArray.map(a => JSON.stringify(a)))].map(a => JSON.parse(a))//doppelte Einträge entfernen
     return result
=> dkghdfkdlfg    V*/

