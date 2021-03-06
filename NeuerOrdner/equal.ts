import { Item } from "../Interface/item";

export function areItemIsEqual(item1: Item, item2: Item) : boolean {

  return item1.name === item2.name && item1.price == item2.price;
}
function isObject(object: Item) {
  return object != null && typeof object === 'object';
}

