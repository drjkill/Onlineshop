import { Item } from "./interface";

export function isEqual(i1: Item, i2: Item) : boolean {

  return i1.name === i2.name && i1.price == i2.price;
}
function isObject(object: Item) {
  return object != null && typeof object === 'object';
}