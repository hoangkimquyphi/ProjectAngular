import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  logout(): void {
    // Xóa JWT token khỏi localStorage hoặc service
    localStorage.removeItem('currentUser');
  }
  private loggedIn = false;
  private loggedInUser : any= null;
  private apiUrl = 'http://localhost:9000/api';
  private user: User| any;
  register(username: string, email: string, full_name: string, phone: string, address: string, gender: string, birthday: string, password: string, password_confirmation: string): Observable<any> {
    const url = `${this.apiUrl}/users/register`;
    const body = { username, email, full_name, phone, address, gender, birthday, password, password_confirmation };
    return this.http.post(url, body);
  }

  login(
    username: string,
    email: string,


  ): Observable<any> {
    const url = 'http://localhost:9000/api/users/login'; // URL đến mock API
    const body = {
      username,
      email,


    }; // Body của request

    return this.http.post(url, body); // Gửi request và trả về response dưới dạng Observable
  }
  register1(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData).pipe(
      map(response => {
        // Lưu thông tin đăng nhập vào localStorage
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
      })
    );
  }

}
