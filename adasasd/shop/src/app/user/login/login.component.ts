import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { cart, loginn, product } from '../data-type';
@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements   OnInit {
  loginForm: FormGroup;
  showLogin:boolean=true
  authError:string="";
  constructor(private formBuilder: FormBuilder, private authService: UserService,private router: Router,private user: UserService, private product:ProductService) {
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

    this.authService.loginn(username, password).subscribe(
      (response) => {
        const token = response.token;
        localStorage.setItem('token', token);
        console.log('Login successful:', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Login failed:', error.error.message);
      }
    );



  }





//   loginn(data: loginn) {
//     this.user.userLogin(data)
//     this.user.invalidUserAuth.subscribe((result)=>{
//       console.warn(result);
//       if(result){
//          this.authError="User not found"
//       }else{
//         this.localCartToRemoteCart();
//       }

//     })
//   }
//   openSignUp(){
//     this.showLogin=false
//   }
//   openLogin(){
// this.showLogin=true;
//   }

//   localCartToRemoteCart(){
//    let data = localStorage.getItem('localCart');
//    let user = localStorage.getItem('user');
//    let userId= user && JSON.parse(user).id;
//    if(data){
//     let cartDataList:product[]= JSON.parse(data);

//     cartDataList.forEach((product:product, index)=>{
//       let cartData:cart={
//         ...product,
//         productId:product.id,
//         userId
//       }
//       delete cartData.id;
//       setTimeout(() => {
//         this.product.addToCart(cartData).subscribe((result)=>{
//           if(result){
//             console.warn("data is stored in DB");
//           }
//         })
//       }, 500);
//       if(cartDataList.length===index+1){
//         localStorage.removeItem('localCart')
//       }
//     })
//    }

//    setTimeout(() => {
//     this.product.getCartList(userId)
//    }, 2000);

//   }


}
