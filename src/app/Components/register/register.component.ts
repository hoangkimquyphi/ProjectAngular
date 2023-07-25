import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebApiService } from 'src/app/web-api.service';

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
  errorMessages: string[] = [];
  constructor(private userService: WebApiService,private router:Router) {}
  onSubmit() {

    this.userService.register(this.username, this.email, this.full_name, this.phone,this.address,this.gender,this.birthday, this.password,this.password_confirmation).subscribe(
      (response) => {
        this.router.navigate(['/login'])

      },
      (error) => {
        console.log('register failed:', error);
        alert('Vui lòng nhập đầy đủ các trường và đúng định dạng')
      }
    );

}

}
