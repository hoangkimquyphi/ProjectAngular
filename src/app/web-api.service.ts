import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from './Interface/ICategory';
import { IOrder } from './Interface/IOrder';
import { IProduct } from './Interface/IProduct';
import { ISubcategory } from './Interface/ISubcategory';
import { Router } from '@angular/router';
import { cart } from './Interface/ICart';
@Injectable({
  providedIn: 'root',
})
export class WebApiService {

  url = 'http://localhost:4000/api/';
  private baseUrl = 'http://localhost:4000/api/users/login';
  constructor(private http: HttpClient,private router:Router) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:4000/api/products');
  }
  //product by Id
  getSingleProduct(productId: number): Observable<IProduct[]> {
    console.log(productId);
    return this.http.get<IProduct[]>('http://localhost:4000/api/products/' + productId);
  }

  getCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:4000/api/categories');
  }

  getSubCategory(): Observable<ISubcategory[]> {
    return this.http.get<ISubcategory[]>( 'http://localhost:4000/api/categories');
  }


  // getRegisterData(): Observable<IRegister[]> {
  //   return this.http.get<IRegister[]>(this.url + '/');
  // }
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
    const url = 'http://localhost:4000/api/users/register'; // URL đến mock API
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
  //adding product in to main array for Admin only
  productList() {
    return this.http.get<IProduct[]>('http://localhost:4000/api/products');
  }


  createProduct(productBody: any): Observable<IProduct>{
    const productUrl = 'http://localhost:4000/api/products/';

    return this.http.post<IProduct>(productUrl,productBody);
  };



  // addProduct(val: IProduct) {
  //   this.http
  //     .post<IProduct>('http://localhost:4000/api/products', val, {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     })
  //     .subscribe((result) =>
  //       console.log('Data entered in Database Successfully !')
  //     );
  // }

  //updating boolean value of addedtocart in table
  UpdateProduct(val: IProduct) {
    return this.http.put('http://localhost:4000/api/products/' + val.id, val);
  }

  //updating boolean value of addedtowishlist in table
  updateBool(addedtowishlist1: IProduct) {
    localStorage.setItem('wishlist', JSON.stringify(addedtowishlist1));
    return this.http.put(
      this.url + 'ProductInfoes/' + addedtowishlist1.id,
      addedtowishlist1
    );
  }

  //deleting product from main array for Admin only
  // deleteProduct(val: IProduct) {
  //   return this.http.delete('http://localhost:4000/api/products/' + val);
  // }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:4000/api/products/${id}`);
  }

  //Editing product details put method for Admin only
  EditCart(val: IProduct) {
    return this.http.put( 'http://localhost:4000/api/products/' + val.id, val);
  }
  localAddToCart(data: IProduct) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
  }

  removeItemFromCart(productId: number) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: IProduct[] = JSON.parse(cartData);
      items = items.filter((item: IProduct) => productId !== item.id);
      localStorage.setItem('localCart', JSON.stringify(items));
    }
  }

  addToCart(cartData: cart) {
    return this.http.post('http://localhost:4000/api/users/carts/items', cartData);
  }
  getCartList(userId: number) {
    return this.http
      .get<IProduct[]>('http://localhost:4000/api/users/carts/items' + userId, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result && result.body) {
        }
      });
  }



  removeToCart(cartId: number) {
    return this.http.delete('http://localhost:4000/api/users/carts' + cartId);
  }
  currentCart() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<cart[]>('http://localhost:4000/api/users/carts?userId=' + userData.id);
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }
  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}`;
    const body = { username, password };
    return this.http.post(url, body);
  }



  // getUserAccData():Observable<IAccDetail[]>{

  //   return this.http.get<IAccDetail[]>(this.url+'AccountInfoes');
  // }

  // getUserLoggedData(): Observable<IUserDetail[]> {
  //   return this.http.get<IUserDetail[]>('http://localhost:4000/api/users/login');
  // }

  getOrderData(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.url + 'Orders');
  }

  postOrder(
    Products: any,
    User: any,
    brand: any,
    image_url: any,
    productPrice: any,
    productQuantity: any
  ) {
    console.log(Products + ' ' + User + this.url + 'Orders', Products, User);
    return this.http.post(this.url + 'Orders', {
      productId: Products,
      UserId: User,
      brand: brand,
      image_url: image_url,
      productPrice: productPrice,
      productQuantity: productQuantity,
    });
  }
  private apiUrl = 'http://localhost:4000/api/reviews';
  getReviews() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addReview(review: any) {
    return this.http.post<any>(this.apiUrl, review);
  }
}
