import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
invalidUserAuth= new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router:Router) { }
  userSignUp(user:signUp){
    
   this.http.post('http://localhost:7800/api/users/register',user,{observe:'response'})
   .subscribe((result)=>{
    if(result){
      localStorage.setItem('user',JSON.stringify(result.body));
      this.router.navigate(['/']);
    }
    
   })
    
  }
  userLogin(data:login){
    this.http.get<signUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
      }
    })
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
    const url = 'http://localhost:7800/api/users/register'; // URL đến mock API
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

  
  
}
