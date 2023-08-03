import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../web-api.service';
import { IProduct } from '../Interface/IProduct';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../Interface/IReview';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent{
// newReview: Review = { id: 0, comment: '', rating: 0, user_id: 0, product_id: 0 };
reviews: Review[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }


  }

