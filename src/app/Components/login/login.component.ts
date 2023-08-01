import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { WebApiService } from 'src/app/web-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

   ngOnInit(): void {
    this.user.userAuthReload();
  }

  constructor(private authService: AuthService, private user: WebApiService,private router: Router) {
  }

  onSubmit() {

    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // const token = response.token;
        console.log('Login successful:', response);
        // localStorage.setItem('token', token);
        alert('Đăng nhập thành công')

        this.router.navigate(['/']);
      },
      error => {
        if (error.status === 404 && error.error.message === 'user is not found') {
          this.errorMessage = 'User not found';
        } else if (error.status === 401 && error.error.message === 'Unauthorized') {
          this.errorMessage = 'Invalid username or password';
        } else {
          this.errorMessage = 'Unknown error occurred';
        }
      }
    );

  }

}
