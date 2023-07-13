import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  [x: string]: any;
  constructor(private HttpClient: HttpClient) {

  }

  getAllProducts() : Observable<Product>{
    const productUrl = 'http://localhost:7800/api/products';
    return this.HttpClient.get<Product>(productUrl);
  
  };
  getProducts(): Observable<Product[]> {
    const productUrl = 'http://localhost:7800/api/products'
    return this.HttpClient.get<Product[]>(productUrl);
  }
getCategories() : Observable<Category>{
  const categoryUrl = 'http://localhost:7800/api/categories/';
    return this.HttpClient.get<Category>(categoryUrl);
}

   createProduct(productBody: any): Observable<Product>{
    const productUrl = 'http://localhost:7800/api/products/';

    return this.HttpClient.post<Product>(productUrl,productBody);
       

  };
  updateProduct(productId: any,productBody: any): Observable<Product>{
    const productUrl = 'http://localhost:7800/api/products/'+productId;

    return this.HttpClient.put<Product>(productUrl,productBody);
  };
  deleteProduct(productId: any): Observable<Product>{
    const productUrl = 'http://localhost:7800/api/products/'+productId;

    return this.HttpClient.delete<Product>(productUrl);
  };
  searchCategoryProducts(categoryId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products?categoryId=  '+categoryId;

    return this.HttpClient.get<Product>(productUrl);
  };
  searchDateProducts(dateParam: any): Observable<Product>{
    const productUrl = 'http://localhost:7800/api/products/date='+dateParam;

    return this.HttpClient.get<Product>(productUrl);
  };
  viewProduct(productId: any): Observable<Product>{
    const productUrl = 'http://localhost:7800/api/products/'+productId;

    return this.HttpClient.get<Product>(productUrl);
  };


  
  
}
