import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private  http: HttpClient) { }
  // cac phuong thuc khac 
  getList(): Observable <any> {
return  this.http.get<any>('http://localhost:54054/');

  }
  getById(): Observable<any> {
    return this.http.get<any>('http://localhost:54054/');
  }

}
