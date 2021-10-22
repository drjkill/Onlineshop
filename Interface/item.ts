export interface Item {
  name: string,
  price: number,
  isEqual:(item: Item) => boolean
}


export interface ItemWithQuantity {
  quantity:number,   
  item:Item,
     

}