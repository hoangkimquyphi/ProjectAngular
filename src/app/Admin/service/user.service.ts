import { Injectable } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import { login, signUp } from '../data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:7800/api/users/login';

  router: any;
  invalidUserAuth: any;
UserLogin(data: login){
  this.http.get<signUp[]>(`http://localhost:7800/api/users/login?username=${data.username}&password=${data.password}`, {observe: 'response'}
  
  ).subscribe((result) =>{
    if(result && result.body){
      localStorage.setItem('user',JSON.stringify(result.body));
      this.router.navigate(['/']);
      this.invalidUserAuth.emit(false)
    } else{
      this.invalidUserAuth.emit(true)
    }
  })
} 

UserAuthReload(){
  if(localStorage.getItem('user')){
    this.router.navigate(['/']);
  
  }
}
  constructor(private http: HttpClient) { }


  



 

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, { username, password });
}

loginn(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}`;
    const body = { username, password };
    return this.http.post(url, body);
  }
}

