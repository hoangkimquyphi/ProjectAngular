import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { WebApiService } from 'src/app/web-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements   OnInit {
  loginForm: FormGroup;
  showLogin:boolean=true
  authError:string="";
  constructor(private formBuilder: FormBuilder, private authService: WebApiService,private router: Router,private user: WebApiService, private product:WebApiService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.user.userAuthReload();

  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe(
      (response) => {
        const token = response.token;
        localStorage.setItem('token', token);
        console.log('Login successful:', response);
        alert('Đăng nhập thành công')
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Login failed:', error.error.message);
        alert('Sai tài khoản hoặc mật khẩu')
      }
    );



  }
}

