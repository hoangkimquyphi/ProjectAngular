import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../class/category';

const CATEGORY_API = "http://localhost:4000/api/categories/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  [x: string]: any;

  constructor(private http:HttpClient) { }


  getListCategory():Observable<any>{
    return this.http.get('http://localhost:4000/api/categories',httpOptions);
  }

  getCategoryById(id: number):Observable<Category>{ 
    return this.http.get<Category>('http://localhost:4000/api/categories' + id,httpOptions);
  }

  createCategory(category: Category):Observable<Category>{
    return this.http.post<Category>('http://localhost:4000/api/categories' ,JSON.stringify(category),httpOptions);
  }
  addCategory(category: Category): void {
    this['categories'].push(category);
  }

  updateCategory(id: number,category: Category):Observable<Category>{
    return this.http.put<Category>('http://localhost:4000/api/categories/' + id,JSON.stringify(category),httpOptions);
  }

  deleteCategory(id: number):Observable<any>{
    return this.http.delete('http://localhost:4000/api/categories/' + id);
  }

 

 
  }

