import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { UserService } from './user.service';


export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  brand: string;
  color: string;
  material: string;
  quantity: string;
  category_id: string;
  image_url: string;
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
  private productsUrl = 'api/products';
  private productsSubject = new BehaviorSubject<any[]>([]);
  users: any;
  productService: any;
  
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
getAllProducts() : Observable <Product>{
  // const productUrl = 'http://localhost:7800/api/products';
  return this.httpClient.get<Product>('http://localhost:7800/api/products');
}

getProduct() : Observable <Product>{
  
  return this.httpClient.get<Product>('http://localhost:7800/api/products');
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

  editProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.httpClient.put<Product>(url, product);

  }


  // deleteProduct(id:any): Observable<any> {



  //   const deleteUrl = `${this.apiUrl}/products/${id}`;
  //   return this.httpClient.delete<Product>(deleteUrl);
    
    
  // }

  deleteProduct(productId: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:7800/api/products/${productId}`);
  }















  private loadProducts(): void {
    this.httpClient.get<any[]>(this.productsUrl).subscribe(
      (products: any[]) => {
        this.productsSubject.next(products);
      },
      (error: any) => {
        console.error('Lỗi tải danh sách sản phẩm: ', error);
      }
    );
  }











  public updateProducts(): void {
    this.loadProducts();
  }

}
