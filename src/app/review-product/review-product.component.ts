import { Component, OnInit } from '@angular/core';
import { IReview } from '../Interface/IReview';
import { WebApiService } from '../web-api.service';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Interface/IProduct';
import { IUserDetail } from '../Interface/IUserDetail';
import { ActivatedRoute, Router } from '@angular/router';


function calcRate(r: number): void {
  const f: number = Math.floor(r);
  const id: string = 'star' + f + (r % f ? 'half' : '');
  if (id) {
    const star: HTMLInputElement | null = document.getElementById(id) as HTMLInputElement | null;
    if (star) {
      star.checked = true;
    }
  }
}
@Component({
  selector: 'app-review-product',
  templateUrl: './review-product.component.html',
  styleUrls: ['./review-product.component.css']
})
export class ReviewProductComponent implements OnInit {
  rating: number | any;
  comment: string | any;
  reviews: IReview[] = [];
  product : any | IProduct[];
  user : any | IUserDetail[];
  // review
  constructor(private api: WebApiService, private http: HttpClient, private router: Router,private Active : ActivatedRoute) { }

  ngOnInit(): void {
    // this.getReviews();
// mai sửa tiếp
    const productId = this.Active.snapshot.params['id']; // Replace with actual product ID

    this.http.get<IReview[]>(`http://localhost:4000/api/reviews/`)
      .subscribe(reviews => this.reviews = reviews);
  }
  saveProductReview() {
    const review = {
      rating: this.rating,
      comment: this.comment,
      productId: this.product.id,
      userId: this.user.id,
    };

    // Update product rating
    const newProduct = {
      ...this.product,
      rating: (this.product.rating * this.product.numReviews + this.rating) / (this.product.numReviews + 1),
      numReviews: this.product.numReviews + 1,
    };

    // Save product review

    this.api.saveProductReview(review,this.product.id).subscribe(
      (response: any) => {
        console.log('Product review saved successfully:', response);
        // Update product in mockAPI
        this.api.updateProduct(newProduct).subscribe(
          (response) => {
            console.log('Product updated successfully:', response);
            this.router.navigate(['/'])
          },
          (error) => {
            console.error('Failed to update product:', error);
          }
        );
      },
      (error: any) => {
        console.error('Failed to save product review:', error);
      }
    );
  }
}
