import { Injectable } from '@angular/core';



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';


export interface Product {
  id :any;
  name: string;
  price: number;
  description: string;
  image: string;
}
export interface cart{
  length: number;
  name:string,
  price:number,
  category_id:string,
  color:string,
  image_url:string,
  description:string,
  material:string,
  brand:string,
  id:number| undefined,
  quantity:undefined | number,
  productId:number,
  userId:number
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  addToCart(cartData: cart):Observable<any> {
    throw new Error('Method not implemented.');
  }
  getCartList(userId: any) {
    throw new Error('Method not implemented.');
  }
  productId :any;
  private apiUrl = 'http://localhost:7800/api';

constructor(private httpClient: HttpClient){
}
getAllProducts() :Observable <Product>{
  const productUrl = 'http://localhost:7800/api/products';
  return this.httpClient.get<Product>(productUrl);
}

addProduct(product: Product): Observable<Product> {
  const url = `${this.apiUrl}/products`;
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.httpClient.post<Product>(url, product, httpOptions);
}
//getcategories()  : Observable <Category>{
//const CategoryUrl = ' http://localhost:4200/list';
//return this.HttpClient.get<Category>(CategoryUrl);
//} 


  // currentProduct: Product = {
  //   name: '',
  //   price: 0,
  //   description: '',
  //   image: ''
  // };

  saveProduct() {
    // TODO: Add code to save product
  }

  cancelProduct() {
    // TODO: Add code to cancel adding product
  }

  // handleImageChange(event: any) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this.currentProduct.image = reader.result as string;
  //   };
  // }
  deleteProduct(productId:number): Observable<Product> {
    const deleteUrl = `${this.apiUrl}/products/${productId}`;
    return this.httpClient.delete<Product>(deleteUrl).pipe(
      map(() => {
        return {
          id: productId,
          name: '',
          price: 0,
          description: '',
          image: '',
        };
      })
    );
  }

}
