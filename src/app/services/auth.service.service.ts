import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`http://localhost:4000/api/users/login`, { username, password });
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }
  
  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  removeToken() {
    sessionStorage.removeItem('token');
  }
  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }
  register(
    username: string,
    email: string,
    full_name: string,
    phone: string,
    address: string,
    gender: string,
    birthday: Number,
    password: string,
    password_confirmation: string,
  
  ): Observable<any> {
    const url = 'http://localhost:4000/api/users/register'; // URL đến mock API
    const body = {
      username,
      email,
      full_name,
      phone,
      address,
      gender,
      birthday,
      password,
      password_confirmation,

    }; // Body của request

    return this.http.post(url, body); // Gửi request và trả về response dưới dạng Observable
  }
  //adding product in







 
  





}


