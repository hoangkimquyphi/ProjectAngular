import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  logout(): void {
    // Xóa JWT token khỏi localStorage hoặc service
    localStorage.removeItem('currentUser');
  }
  
  login(
    username: string,
    password: string,
    
  
  ): Observable<any> {
    const url = 'http://localhost:4000/api/users/login'; // URL đến mock API
    const body = {
      username,
      password,
      

    }; // Body của request

    return this.http.post(url, body); // Gửi request và trả về response dưới dạng Observable
  }
  
}