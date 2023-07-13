
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  username: string |any
  password: string |any;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Lưu trữ JWT token vào localStorage hoặc service
        localStorage.setItem('currentUser', JSON.stringify(response.token));
        // Chuyển hướng người dùng đến trang chính
        this.router.navigate(['/home']);
      },
      (error: any) => {
        // Xử lý lỗi đăng nhập
        alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
      }
    );
  }
}



  