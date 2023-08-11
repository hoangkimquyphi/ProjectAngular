import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Interface/IProduct';
import { IReview } from 'src/app/Interface/IReview';
import { ISubcategory } from 'src/app/Interface/ISubcategory';
import { IUserDetail } from 'src/app/Interface/IUserDetail';
import { CartService } from 'src/app/services/cart.service';
import { ReviewService } from 'src/app/services/review.service';
import { WishlistCartService } from 'src/app/services/wishlist-cart.service';
import { WebApiService } from 'src/app/web-api.service';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
  user:IUserDetail|any;
  reviews: IReview = { reviews: [] };
  // reviewList: IReview | any;
  p: any;
  productQuantity: number = 1;
  productData: any;
  subCategory: ISubcategory[] = [];
  loader: Boolean = true;
  result: IProduct[] = [];
  quantity: number = 1;
  constructor(private route: ActivatedRoute, private api: WebApiService, private cartService: CartService, private wishlistCartService: WishlistCartService, private http: HttpClient, private review: ReviewService) { }

  ngOnInit(): void {
    this.api.getSingleProduct(this.route.snapshot.params['productId']).subscribe(product => {
      this.productData = product;
      this.loader = false;
      console.log(this.productData);
    });

    this.api.getSubCategory().subscribe((data2: ISubcategory[]) => {
      this.subCategory = data2;
      this.loader = false;
      console.log(this.subCategory)
    })


    this.api.getProducts().subscribe((data: IProduct[]) => {
      this.result = data;
      this.loader = false;
      console.log(this.result)
    })


    // const id = this.route.snapshot.params['id']
    // this.review.getReviewById(id).subscribe((data) => {

    //   console.log("xxxxxx", data);

    //   this.reviewList = data
    // })

    const productId = this.route.snapshot.params['productId'];
    this.review.getReviewsByProductId(productId)
      .subscribe(reviews => {
        console.log("review", reviews);

        this.reviews = reviews

      });
  }
  calculateAverageRating(): number {
    const totalRating = this.reviews.reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / this.reviews.reviews.length;
  }
  //added to cart calling from cart service
  addtocart(dt: IProduct) {
    dt.addedtocart = true;
    this.cartService.addtoCart(dt);
  }



  loadPage() {
    window.location.reload();
  }


  //updating boolean column in database i.e(addedtowishlist)
  updateBool(product: IProduct) {
    product.addedToWishList = !product.addedToWishList;
    this.wishlistCartService.addToWishlistCart(product);
    this.api.updateBool(product).subscribe(() => {
      product;
      console.log('addedtowishlist true');
    })
  }
  //updating boolean colum in database i.e(addedtocartt)
  updateCartBool(product: IProduct) {
    product.addedtocart = product.addedtocart;//toggling between true and false
    this.api.EditCart(product).subscribe(() => { //subscribing data
      product;
      console.log('cart Boolean change')
    })
  }
  // remove cart item through button in mat-card and also updating boolean val in database
  removeCartItem(product: IProduct) {
    product.addedtocart = !product.addedtocart;//toggling between true and false
    this.api.EditCart(product).subscribe(() => { //subscribing data
      product;
      console.log('cart Boolean change')
    })
    this.cartService.removeCartItem(product);//calling remove cartitem from cart service
  }
  increaseQuantity() {
    this.quantity++;
    this.updateQuantity();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateQuantity();
    }
  }

  updateQuantity() {
    this.http.put('http://localhost:4000/api/products', { quantity: this.quantity }).subscribe();
  }

  convertToStars(rating: number): string {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (i < Math.round(rating)) {
        stars += '<span class="fa fa-star checked"></span>';
      } else {
        stars += '<span class="fa fa-star"></span>';
      }
    }
    return stars;
  }


}
