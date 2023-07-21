import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalPrice() {
    // return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  addToCartViaApi(productId: number) {
    return this.http.post('http://localhost:4000/api/users/carts', { productId });
  }

  getCartItemsViaApi() {
    return this.http.get<Product[]>('http://localhost:4000/api/users/carts');
  }

  removeCartItemViaApi(productId: number) {
    return this.http.delete(`http://localhost:4000/api/users/carts/${productId}`);
  }
}