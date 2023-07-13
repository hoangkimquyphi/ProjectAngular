import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string |any
  email: string |any;
  full_name: string |any;
  phone:  string |any;
  address: string |any;
  gender: string |any;
  birthday: string |any
  password: string |any;
  password_confirmation: |any;

  constructor(private userService: UserService) {}
  onSubmit() {
    this.userService.register(this.username, this.email, this.full_name, this.phone,this.address,this.gender,this.birthday, this.password,this.password_confirmation).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Lưu thông tin đăng nhập vào localStorage hoặc sessionStorage
      },
      (error) => {
        console.log('Login failed:', error);
        // Hiển thị thông báo lỗi đăng nhập
      }
    );
}

}
