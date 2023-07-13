import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  successMessage: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Lấy thông báo đăng nhập thành công từ queryParams
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['successMessage'];
    });
  }

}
