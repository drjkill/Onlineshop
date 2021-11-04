export class RealItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    isEqual(item) {
        return item.name === this.name && item.price == this.price;
    }
    ;
}
