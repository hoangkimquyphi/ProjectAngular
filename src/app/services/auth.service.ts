import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/login';
  private tokenKey = 'access_token';
  private accessToken: string|any;

  constructor(private http: HttpClient) { }

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  login(username: string, password: string) {
    return this.http.post('http://localhost:4000/api/users/login', { username, password });
  }
  // login1(username: string, password: string) {
  //   return this.http.post<LoginResponse>(this.apiUrl, { username, password }).toPromise()
  //     .then(response => {
  //       localStorage.setItem(this.tokenKey, response.access_token);
  //     });
  // }

  // getToken() {
  //   return localStorage.getItem(this.tokenKey);
  // }

  // logout() {
  //   localStorage.removeItem(this.tokenKey);
  // }

  // isLoggedIn() {
  //   return !!this.getToken();
  // }
}
