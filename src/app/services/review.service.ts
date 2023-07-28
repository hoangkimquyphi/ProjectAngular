import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReview } from '../Interface/IReview';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
 getReviewById(id:number):Observable<any>{
  return this.http.get<IReview>(`http://localhost:4000/api/reviews/${id}reviews`)
 }
  constructor(private http: HttpClient) { }
}
