import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews: any[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.reviewService.getReviews()
      .subscribe(reviews => this.reviews = reviews);
  }

  addReview(name: string, email: string, rating: number, review: string) {
    const newReview = { name, email, rating, review };
    this.reviewService.addReview(newReview)
      .subscribe(review => {
        this.reviews.push(review);
      });
  }

}
