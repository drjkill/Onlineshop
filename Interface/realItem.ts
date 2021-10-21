import { Item } from "./item";

export class RealItem implements Item {
    name: string;
    price: number;
    
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    isEqual(item: Item): boolean { 
        return item.name === this.name && item.price == this.price; 
    };
}