export interface Item {
  name: string,
    price: number,
  }


export interface ItemWithQuantity {
  quantity:number,   
  item:Item,
     

}