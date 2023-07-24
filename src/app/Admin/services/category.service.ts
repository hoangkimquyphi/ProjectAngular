import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';




export interface Category {
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
    private url='http://localhost:7800/api/categories';
  deleteCategory(categoryId: number) {
    const url = 'http://localhost:7800/api/categories'+categoryId;

    return this.httpClient.delete<Category>(url);
  }
  getAllcategory() :Observable<Category>|any{
    const categoryUrl = 'http://localhost:7800/api/categories';
    return this.httpClient.get<Category>(categoryUrl);
  }
  constructor(private httpClient : HttpClient) { }


 
  editCategory(category: Category): Observable<Category> {
    const url = 'http://localhost:7800/api/categories'+category;
   
    return this.httpClient.put<Category>(url, category);

  }
  addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.url, category);
  }
 
}
