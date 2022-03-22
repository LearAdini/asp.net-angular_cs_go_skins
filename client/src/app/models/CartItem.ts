import { Product } from "./products";

export class CartItem {
  id: number;
  productId: number;
  productName: string;
  Price: number;

  constructor(id: number, product: Product) {
    this.id = id;
    this.productId = product.id;
    this.productName = product.name;
    this.Price = product.price;
  }
}
