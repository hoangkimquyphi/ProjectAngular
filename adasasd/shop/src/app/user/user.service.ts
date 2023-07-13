import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable, map } from 'rxjs';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private loggedIn = false;
  private user: User | any;

  private loggedInUser: any = null;

  private apiUrl = 'http://localhost:7800/api/users/login';
  constructor(
    private http: HttpClient,
    private permissionsService: NgxPermissionsService
  ) {}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  login(username: string, password: string): boolean {
    // Gọi API để đăng nhập và nhận về thông tin người dùng, ví dụ:
    const user = this.mockApiLogin(username, password);

    // Nếu đăng nhập thành công, lưu thông tin người dùng vào biến loggedInUser
    if (user) {
      this.loggedInUser = user;
      return true;
    }

    return false;
  }

  logout(): void {
    // Xóa thông tin người dùng khi đăng xuất
    this.loggedInUser = null;
  }
  isAdmin(): boolean {
    // Kiểm tra xem người dùng có phải là admin hay không
    return this.loggedInUser && this.loggedInUser.role === 'admin';
  }

  isEmployee(): boolean {
    // Kiểm tra xem người dùng có phải là nhân viên hay không
    return this.loggedInUser && this.loggedInUser.role === 'staff';
  }

  isUser(): boolean {
    // Kiểm tra xem người dùng có phải là người dùng hay không
    return this.loggedInUser && this.loggedInUser.role === 'user';
  }
  private mockApiLogin(username: string, password: string): any {
    // Sử dụng mock API để đăng nhập và trả về thông tin người dùng, ví dụ:
    const users = [
      { id: 1, username: '', password: '', role: '' },
      { id: 2, username: '', password: '=', role: '' },
      { id: 3, username: '', password: '', role: 'user' },
 
    ];

    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      return { id: user.id, username: user.username, role: user.role };
    }
    return null;
  }
  async login2(username: string, password: string): Promise<Observable<any>> {
    const url = 'http://localhost:7800/api/users/login'; // URL đến mock API
    const body = { username, password }; // Body của request
    return await this.http.post(url, body); // Gửi request và trả về response dưới dạng Observable
  }
  // login1(username: string, password: string): Observable<string> {
  //   return this.http.get<User[]>('http://localhost:3000/users').pipe(
  //     map((users: User[]) => {
  //       const user = users.find(
  //         (u) => u.username === username && u.password === password
  //       );
  //       if (user) {
  //         return user.role;
  //       } else {
  //         throw new Error('Invalid credentials');
  //       }
  //     })
  //   );
  // }

  public setPermissions(permissions: string[]) {
    this.permissionsService.loadPermissions(permissions);
  }

  public async hasPermission(permission: string): Promise<boolean> {
    return await this.permissionsService.hasPermission(permission);
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
