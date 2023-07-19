import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost9000/api/reviews';

  constructor(private http: HttpClient) { }

  getReviews() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addReview(review: any) {
    return this.http.post<any>(this.apiUrl, review);
  }
}
