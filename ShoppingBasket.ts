class ShoppingBasket{
   item: string;
   price: number;

   constructor(item:string,price:number){
       this.item = item;
       this.price = price;
   };

   addItem(){};
   deleteItem(){};
   deleteItems(){};
   print(){};
   sortByName(){};
   printPackList(){};
};

const basket = new ShoppingBasket("ttt",10.00);