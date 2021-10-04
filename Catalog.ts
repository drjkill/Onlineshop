class Catalog {
    product: string;
    price: number;
    
    constructor(product:string,price:number) {
      this.product = product;
      this.price = price;
    };

    addProduct(){};
    updateProduct(){};
    deleteProduct(){};
    showProduct(){};
    getProductPrice(){};
    hasProduct(){};
};
const catalog = new Catalog("tttt",10.00);