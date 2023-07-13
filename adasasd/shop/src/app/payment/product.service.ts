// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Product } from '../products/product';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsService {
//   [x: string]: any;
//   constructor(private HttpClient: HttpClient) {

//   }

//   getAllProducts() : Observable<Product>{
//     const productUrl = 'http://localhost:7800/api/products';
//     return this.HttpClient.get<Product>(productUrl);
  
//   };
//   getProducts(): Observable<Product[]> {
//     const productUrl = 'http://localhost:7800/api/products'
//     return this.HttpClient.get<Product[]>(productUrl);
//   }

//   saveCart(): void {
//     localStorage.setItem('cart_items', JSON.stringify(this.getProducts));
//   }

//   addToCart(addedProduct: any) {
//     this.products.push(addedProduct);
//     this.saveCart();
//   }

//   loadCart(): void {
//     this.products = JSON.parse(localStorage.getItem('cart_items') as any) || [];
//   }

//   productInCart(product: any): boolean {
//     return this.products.findIndex((x: any) => x.id === product.id) > -1;
//   }

//   removeProduct(product: any) {
//     const index = this.products.findIndex((x: any) => x.id === product.id);

//     if (index > -1) {
//       this.products.splice(index, 1);
//       this.saveCart();
//     }
//   }

//   clearProducts() {
//     localStorage.clear();
//   }
// }
