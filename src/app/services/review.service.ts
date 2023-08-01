import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReview, Review } from '../Interface/IReview';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService  {
  averageRating = 0;
  constructor(private http: HttpClient) { }

  getReviewsByProductId(productId: number): Observable<IReview> {
    // return this.http.get<IReview[]>(`http://localhost:4000/api/reviews/${productId}/reviews`);
    const url = `http://localhost:4000/api/reviews/${productId}/reviews`;
    return this.http.get<IReview>(url);


  }
  



  // addReview(review: Review, productId: number) {
  //   const token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Long ${token}`);
  //   return this.http.post<Review>(`http://localhost:4000/api/reviews/${productId}`, review, { headers });
  // }

  // updateReview(id: number, review: Review, productId: number) {
  //   const token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Long ${token}`);
  //   return this.http.put(`http://localhost:4000/api/reviews/${id}/product/${productId}`, review, { headers });
  // }

  // deleteReview(id: number) {
  //   const token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Long ${token}`);
  //   return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  // }
}
