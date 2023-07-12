import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Category } from '../component/mathang/category';



export interface Product {
  id :any;
  name: string;
  price: number;
  description: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  deleteCategory(categoryId: number) {
    const url = 'http://localhost:3000/api/categories'+categoryId;
    return this.httpClient.delete<Category>(url);
  }
  getAllcategory() :Observable<Category>|any{
    const categoryUrl = 'http://localhost:3000/api/categories';
    return this.httpClient.get<Category>(categoryUrl);
  }
  constructor(private httpClient : HttpClient) { }
 
}
