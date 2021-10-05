class Catalog {
    products: string[];
    price: number[];
    
    constructor(products:string[],price:number[]) {
      this.products = products;
      this.price = price;
    };

    addProduct(){};
    updateProduct(){};
    deleteProduct(){};
    showProduct(){};
    getProductPrice(){};
    hasProduct(){};
};
const catalog = new Catalog([],[]);